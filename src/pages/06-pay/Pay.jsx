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
  const {state} = useLocation(); // CartList에서 보낸 state
  // const [userInfo, setUserInfo] = useState([]);
  const [typeSelect, setTypeSelect] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zipcode: '',
    address: '',
    addressDetail: ''
  });
  const product = state?.items ?? [];
  const totalPrice = state?.totalPrice ?? 0;
  const delivery = state?.delivery ?? 0;
  const totalOrder = state?.totalOrder ?? 0;

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

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
      createdat: created_at
    }));

    axios.post('http://localhost/admin/api/orders.php',orderData,{
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res=>{
      console.log(res.data);
      navi('/pay/done');
    })
    .catch(e=>{
      console.error("삭제 요청 실패:", e);
    })
  }

  useEffect(()=>{
    const memId = sessionStorage.getItem('mem_id');
    if(!memId) return;

    axios.get(`http://localhost/admin/api/member.php?mem_id=${memId}`)
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
      <ProductPrice className={'pay-productprice01'} titleClassName={'pay-title01'} priceClassName={'pay-price01'} title={'총 상품금액(개)'} price={totalPrice.toLocaleString()}/>
      <ProductPrice className={'pay-productprice01'} titleClassName={'pay-title01'} priceClassName={'pay-price01'} title={'총 배송비'} price={delivery.toLocaleString()}/>
      <ProductPrice className={'pay-productprice02'} titleClassName={'pay-title02'} priceClassName={'pay-price02'} title={'총 주문금액'} price={totalOrder.toLocaleString()}/>

      <div className='all-btnlong'>
        <BtnLong className={'btnlong-pay'} label={'결제하기'} isActive={'true'} onClick={paydone}/>
      </div>
    </div>
  )
}

export default Pay