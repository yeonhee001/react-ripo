import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AgreeCheck from '../../component/_common/AgreeCheck';
import CartItem from '../../component/05-cart/CartItem';
import PayDoneBar from '../../component/_common/PayDoneBar';
import CardList from '../../component/_common/CardList';
import ProductPrice from '../../component/_common/ProductPrice'
import BtnLong from '../../component/_common/BtnLong';
import InfoMessage from '../../component/_common/InfoMessage';
import BtnShort from '../../component/_common/BtnShort';
import DataLoading from '../../component/_common/DataLoading';
import '../../styles/05-cart/cart.scss';

function CartList() {
  const navi = useNavigate();
  const [loading, setLoading] = useState(true); // 데이터 로딩
  const [addList, setAddList] = useState([]); // 상품 리스트
  const [cartList, setCartList] = useState([]); // 사용자 장바구니 리스트
  const [checkItems, setCheckItems] = useState({}); // 장바구니 체크표시
  const [cartCtgrList, setCartCtgrList] = useState([]); // 사용자 장바구니 리스트 카테고리 가져오기
  const [productCtgrList, setProductCtgrList] = useState([]); // 추천 상품 리스트 카테고리 가져오기

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  //전체 선택 버튼 관련
  const checkChange = (id) =>{
    setCheckItems(prev=>({
      ...prev, [id]: !prev[id]
    }))
  };
  const allCheckBtn = ()=>{
    const allChecked = cartList.every(item=>checkItems[item.id]);
    const newState={};
    cartList.forEach(item=>{
      newState[item.id] = !allChecked;
    });
    setCheckItems(newState);
  };
  useEffect(() => {
    const newCheckItems = {};
    cartList.forEach(item => {
      newCheckItems[item.id] = false;
    });
    setCheckItems(newCheckItems);
  }, [cartList]);
  
  // 총 가격
  const totalPrice = cartList.reduce((acc,item)=> {
    if(checkItems[item.id]){
      return acc + Number(item.p_price);
    }
    return acc;
  }, 0)
  // reduce는 배열의 값을 하나로 만들기, 0은 acc 초기값을 0으로 설정
  const formatTotal = (price)=>price.toLocaleString('ko-KR');

  // 선택한 상품의 수 보여주기
  const selectCount = cartList
  .filter(item => checkItems[item.id])
  .reduce((sum, item) => sum + (Number(item.p_ea) || 0), 0);  
  
  // 서버에서 장바구니 목록 가져와서 로컬스토리지에 저장
  useEffect(()=>{
    const memId = sessionStorage.getItem('mem_id');
    if(!memId) return;
    
    axios.get(`${process.env.REACT_APP_APIURL}/api/cart.php?mem_id=${memId}`)
    .then(res=>{
      setCartList(res.data);
      localStorage.setItem('cart', JSON.stringify(res.data));
    })
  },[])

  // 로컬스토리지 갱신
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cartList));
  },[cartList])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartList(JSON.parse(savedCart));
      } catch (e) {
        console.error('로컬스토리지 파싱 에러', e);
      }
    }
  }, []);


  // 추천상품에 보여줄 상품 리스트 가져오기
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_APIURL}/api/p_list.php`)
    .then(res=>{
      setAddList(res.data);
    })
  },[])
  const productList = addList.slice(-8);

  // 카테고리 정보 가져오기
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_APIURL}/api/category.php`)
    .then(res=>{
      const matchCartCtgr = cartList.map(item=>{
        const ctgr = res.data.find(p => String(p.id) === String(item.cat_id));
        return ctgr?.cat_name ?? '';
      });
      const matchProductCtgr = productList.map(item=>{
        const ctgr = res.data.find(p => String(p.id) === String(item.cat_id));
        return ctgr?.cat_name ?? '';
      });
      setCartCtgrList(matchCartCtgr);
      setProductCtgrList(matchProductCtgr);
    })
    .catch(e => console.error('카테고리 데이터 불러오기 실패', e));
  },[cartList, productList])

  // 선택 삭제 관련
  const deleteSelect = async()=>{
    const selected = Object.keys(checkItems).filter(id=>checkItems[id]).map(id=>Number(id));
    // 선택삭제를 위한 선택된 id 항목 찾기, 체크된 아이디 찾아서 문자열이면 숫자로 변경

    axios.post(`${process.env.REACT_APP_APIURL}/api/cart_delete.php`, {ids: selected },
      {headers: { 'Content-Type': 'application/json' }}
    )
    .then(res=>{
      if(res.data.status === 'success'){
        // 삭제 후 장바구니 데이터 다시 받아오기
        const memId = sessionStorage.getItem('mem_id');
        if(!memId) return;

        axios.get(`${process.env.REACT_APP_APIURL}/api/cart.php?mem_id=${memId}`)
          .then(res => {
            setCartList(res.data);

            const newCheckItems = {};
            res.data.forEach(item => newCheckItems[item.id] = false);
            setCheckItems(newCheckItems);
          })
          .catch(e => console.error("삭제 후 장바구니 재요청 실패", e));
      }
    })
    .catch(e=>{
      console.error("삭제 요청 실패:", e);
    })
  }
  
  // 개별 삭제 관련
  const deleteItem = async(id)=>{
    axios.post(`${process.env.REACT_APP_APIURL}/api/cart_delete.php`, {ids: [id]},
      {headers: { 'Content-Type': 'application/json' }}
    )
    .then(res=>{
      if(res.data.status === 'success'){
        setCartList(prev => prev.filter(item => item.id !== id));
      }
    })
    .catch(e=>{
      console.error("삭제 요청 실패:", e);
    })
  }

  // 구매하기 버튼 클릭 시 pay 로 정보 전달
  const payClick = ()=>{
    // 1) 체크된 아이템 선별
    const checkedItems = cartList.filter(item => checkItems[item.id]);
    // 2) 총 상품금액 계산
    const totalProductPrice = checkedItems.reduce(
      (acc, item) => acc + item.p_price * item.p_ea, 0
    );
    // 3) 배송비
    const delivery = totalProductPrice > 0 ? 2500 : 0;
    // 4) navigate 시 state 전달
    navi('/pay', {
      state: {
        items: checkedItems,
        totalPrice: totalProductPrice,
        delivery,
        totalOrder: totalProductPrice + delivery
      }
    });
  }

  // 로딩처리
  useEffect(()=>{
    if(cartList !== null){
      const timer = setTimeout(()=>{
        setLoading(false);
      },300);
      return ()=>clearTimeout(timer);
    }
  },[cartList]);

  if(loading){
    return(
      <DataLoading/>
    )
  }


  return (
    <>
      <h2 className='cartlist-toptitle'>장바구니</h2>

      {cartList.length > 0 ?       
        (
          <>
            <div className='cart-check-del'>
              <div className='cart-all-check'>
                <AgreeCheck checked={cartList.length > 0 && Object.values(checkItems).every(Boolean)} onChange={allCheckBtn}/>
                <p>전체선택</p>
              </div>
              <p className='cart-del' onClick={deleteSelect}>선택삭제</p>
            </div>

            {cartList.map((item,i)=>(
              <CartItem key={item.id} type={cartCtgrList[i] ?? ''} id={item.p_id} imgurl={item.p_thumb} title={item.p_name} num={item.p_ea} price={item.p_price} checked={checkItems[item.id] || false} onChange={()=>checkChange(item.id)} onClick={()=>deleteItem(item.id)}/>
            ))}

            <div className='cart-addproduct'>
              <PayDoneBar className={'cart-mid-title'} titleClassName={'cart-title'} title={'함께 구매하면 좋을 상품'}/>
              <CardList type={productCtgrList} data={productList} rows={1} slidesPerView={2.6}/>
            </div>

            <div className='cart-productprice'>
              <ProductPrice className={'cart-productprice01'} titleClassName={'cart-title01'} priceClassName={'cart-price01'} title={`총 상품금액(${selectCount}개)`} price={formatTotal(totalPrice)}/>
              <ProductPrice className={'cart-productprice01'} titleClassName={'cart-title01'} priceClassName={'cart-price01'} title={'총 배송비'} price={totalPrice > 0 ? '2,500' : '0'}/>
              <ProductPrice className={'cart-productprice02'} titleClassName={'cart-title02'} priceClassName={'cart-price02'} title={'총 주문금액'} price={formatTotal(totalPrice + (totalPrice > 0 ? 2500 : 0))}/>
            </div>

            <div className='cart-btn'>
              <BtnLong className={'btnlong-pay'} label={'구매하기'} isActive={totalPrice > 0} onClick={payClick}/>
            </div>
          </>
        ) : (
          <div className='cart-noitem'>
            <InfoMessage type={'nocart'}/>
            <BtnShort className={"nocart-btn"} fillType={"eyeshop"} fillTo={"/category"}/>
          </div>
        )
      }
    </>
  )
}

export default CartList