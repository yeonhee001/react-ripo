import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import PayDoneBar from '../../component/_common/PayDoneBar'
import PayForm from '../../component/06-pay/PayForm'
import PayMemo from '../../component/06-pay/PayMemo';
import PayProductItem from '../../component/_common/PayProductItem';
import PayTypeBtn from '../../component/06-pay/PayTypeBtn';
import ProductPrice from '../../component/_common/ProductPrice'
import BtnLong from '../../component/_common/BtnLong';
import '../../styles/06-pay/pay.scss';

function Pay() {
  const navi = useNavigate();
  const location = useLocation();
  const payData = location.state; // 상품 디테일 페이지에서 보내준 state
  const [typeSelect, setTypeSelect] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zipcode: '',
    address: '',
    addressDetail: ''
  });

  const [product, setProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [productCount, setProductCount] = useState(0);
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  useEffect(() => {
    if(payData?.items){
      const items = payData.items;

      // 문자열 숫자일 수 있으니 숫자형 변환 꼭 하기
      const recalculatedTotalPrice = items.reduce((acc, item) => 
        acc + Number(item.p_price), 0
      );
      const totalEa = items.reduce((acc, item) => 
        acc + Number(item.p_ea), 0
      );

      setProduct(items);
      setTotalPrice(recalculatedTotalPrice);
      setProductCount(totalEa);
      setDelivery(payData.delivery ?? 0);
      setTotalOrder(recalculatedTotalPrice + (payData.delivery) ?? 0);
    } else if(payData?.p_id){
      const ea = Number(payData.p_ea ?? 1);
      const pricePerUnit = Number(payData.p_price);
      setProduct([{
        id: payData.p_id,
        p_id: payData.p_id,
        p_name: payData.p_name,
        p_price: pricePerUnit,
        p_thumb: payData.p_thumb,
        p_ea: ea,
        cat_id: payData.cat_id
      }]);
      setTotalPrice(pricePerUnit);
      setProductCount(ea);
      setDelivery(2500);
      setTotalOrder(pricePerUnit + 2500);
    }
  }, [payData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // 주문번호 생성
  const orderId = () => {
    const now = new Date();
  
    const pad = (n, len = 2) => n.toString().padStart(len, '0'); // 한자리 숫자 앞에 0붙여줌
  
    const datePart = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
    const timePart = `${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}${pad(now.getMilliseconds(), 3)}`;
  
    return `${datePart}-${timePart}`;
  };

  // 결제하기 버튼 클릭 시
  const paydone = ()=>{
    const ord_id = orderId();
    const mem_id = sessionStorage.getItem('mem_id');
    const created_at = new Date().toISOString().slice(0, 19).replace('T', ' '); // yyyy-mm-dd hh:mm:ss

    const orderData = product.map(item=>({
      ordid: ord_id,
      memid: mem_id,
      proid: item.p_id,
      name: item.p_name,
      price: item.p_price,
      ea: item.p_ea,
      thumb: item.p_thumb,
      createdat: created_at,
      catid: item.cat_id
    }));

    axios.post(`${process.env.REACT_APP_APIURL}/orders.php`,orderData,{
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res=>{
      // console.log(res.data);
      // 결제완료한 상품 장바구니에서 제거
      if (payData?.items) {
        const purchasedItems = payData.items;
        const purchasedIds = purchasedItems.map(item => item.id);
        const cartget = JSON.parse(localStorage.getItem('cart')) || [];
        const updateCart = cartget.filter(item => !purchasedIds.includes(item.id));
        localStorage.setItem('cart', JSON.stringify(updateCart));

        axios.post(`${process.env.REACT_APP_APIURL}/cart_delete.php`, { ids: purchasedIds }, {
          headers: { 'Content-Type': 'application/json' }
        });
      }
      navi('/pay/done');
    })
    .catch(e=>{
      console.error("삭제 요청 실패:", e);
    })
  }

  useEffect(()=>{
    const memId = sessionStorage.getItem('mem_id');
    if(!memId) return;

    axios.get(`${process.env.REACT_APP_APIURL}/member.php?mem_id=${memId}`)
    .then(res=>{
      const data = res.data[0];
      // setUserInfo(data);
      setFormData({
        name: data.m_name || '',
        phone: data.m_tel || '',
        zipcode: '',
        address: '',
        addressDetail: ''
      })
    })
  },[])

  // 다음 우편번호 검색 스크립트
  const openPostCode = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        let addr = '';
        let extraAddr = '';
  
        if (data.userSelectedType === 'R') {
          addr = data.roadAddress;
          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraAddr += (extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          if (extraAddr !== '') {
            extraAddr = ` (${extraAddr})`;
          }
        } else {
          addr = data.jibunAddress;
          extraAddr = '';
        }
  
        setFormData(prev => ({
          ...prev,
          zipcode: data.zonecode,
          address: addr,
          extraAddress: extraAddr
        }));
  
        // 상세주소 입력칸에 포커스 (optional)
        const detailInput = document.getElementById('address-detail-input');
        if (detailInput) detailInput.focus();
      }
    }).open();
  };

  return (
    <div>
      <h2 className='pay-toptitle'>결제</h2>
      <div className='all-payinfo'>
        <PayDoneBar className={'pay-top'} titleClassName={'pay-title'} title={'배송지 정보'}/>
        <form onSubmit={handleSubmit}>
          <PayForm className={'pay-input'} label={'수령인'} name={'name'} value={formData.name} onChange={handleChange}/>
          <PayForm className={'pay-input'} label={'전화번호'} name={'phone'} type={'number'} value={formData.phone} onChange={handleChange}/>
          <div className='address-num'>
            <PayForm className={'pay-input'} label={'우편번호'} name={'zipcode'} value={formData.zipcode} readOnly/>
            <p onClick={openPostCode}>우편번호 찾기</p>
          </div>
          <PayForm className={'pay-input'} label={'주소지'} name={'address'} value={formData.address} readOnly/>
          <PayForm className={'pay-input'} label={'상세주소'} name={'addressDetail'} value={formData.addressDetail} onChange={handleChange}/>
          <div className='pay-delv'>
            <PayForm className={'pay-input'} label={'배송메모'}/>
            <PayMemo className={'pay-memo'}/>
          </div>
        </form>
      </div>

      <div className='all-payproduct'>
        <PayDoneBar className={'pay-top'} titleClassName={'pay-title'} title={'주문 상품'}/>
        {
          product.map(item=>(
            <PayProductItem key={item.id} imgurl={item.p_thumb} title={item.p_name} num={item.p_ea} price={item.p_price}/>
          ))
        }
      </div>

      <div className='all-paytype'>
        <PayDoneBar className={'pay-top'} titleClassName={'pay-title'} title={'결제 방식'}/>
        <div className='paytype'>
          <PayTypeBtn label={'신용/체크카드'}  isActive={typeSelect === 'card'} onClick={()=>setTypeSelect('card')}/>
          <PayTypeBtn label={'무통장입금'}  isActive={typeSelect === 'bank'} onClick={()=>setTypeSelect('bank')}/>
        </div>
      </div>

      <PayDoneBar className={'pay-top'} titleClassName={'pay-title'} title={'결제 금액'}/>
      <ProductPrice className={'pay-productprice01'} titleClassName={'pay-title01'} priceClassName={'pay-price01'} title={`총 상품금액(${productCount}개)`} price={totalPrice.toLocaleString()}/>
      <ProductPrice className={'pay-productprice01'} titleClassName={'pay-title01'} priceClassName={'pay-price01'} title={'총 배송비'} price={delivery.toLocaleString()}/>
      <ProductPrice className={'pay-productprice02'} titleClassName={'pay-title02'} priceClassName={'pay-price02'} title={'총 주문금액'} price={totalOrder.toLocaleString()}/>

      <div className='all-btnlong'>
        <BtnLong className={'btnlong-pay'} label={'결제하기'} isActive={!!formData.address} onClick={paydone}/>
      </div>
    </div>
  )
}

export default Pay