import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AgreeCheck from '../../component/_common/AgreeCheck';
import CartItem from '../../component/05-cart/CartItem';
import PayDoneBar from '../../component/_common/PayDoneBar';
import CardList from '../../component/_common/CardList';
import ProductPrice from '../../component/_common/ProductPrice'
import BtnLong from '../../component/_common/BtnLong';
import InfoMessage from '../../component/_common/InfoMessage';
import BtnShort from '../../component/_common/BtnShort';
import '../../styles/05-cart/cart.scss';

function CartList() {
  const [addList, setAddList] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(()=>{
    const memId = sessionStorage.getItem('mem_id');
    if(!memId) return;
    
    axios.get(`http://localhost/admin/api/cart.php?mem_id=${memId}`)
    .then(res=>{
      setCartList(res.data);
    })
  },[])

  useEffect(()=>{
    axios.get('http://localhost/admin/api/p_list.php')
    .then(res=>{
      setAddList(res.data);
    })
  },[])
  const productList = addList.slice(-8);

  return (
    <>
      <h2 className='cartlist-toptitle'>장바구니</h2>

      <div className='cart-check-del'>
        <div className='cart-all-check'>
          <AgreeCheck/>
          <p>전체선택</p>
        </div>
        <p className='cart-del'>선택삭제</p>
      </div>

      {cartList.map(item=>(
        <CartItem key={item.id} imgurl={item.p_thumb} title={item.p_name} num={item.p_ea} price={item.p_price}/>
      ))}

      <div className='cart-addproduct'>
        <PayDoneBar className={'cart-mid-title'} titleClassName={'cart-title'} title={'함께 구매하면 좋을 상품'}/>
        <CardList data={productList} rows={1} slidesPerView={2.2}/>
      </div>

      <div className='cart-productprice'>
        <ProductPrice className={'cart-productprice01'} titleClassName={'cart-title01'} priceClassName={'cart-price01'} title={'총 상품금액(개)'} price={'19,800'}/>
        <ProductPrice className={'cart-productprice01'} titleClassName={'cart-title01'} priceClassName={'cart-price01'} title={'총 배송비'} price={'2,500'}/>
        <ProductPrice className={'cart-productprice02'} titleClassName={'cart-title02'} priceClassName={'cart-price02'} title={'총 주문금액'} price={'22,100'}/>
      </div>

      <div className='cart-btn'>
        <BtnLong className={'btnlong-pay'} label={'구매하기'} goto={"/pay/done"}/>
      </div>


      <div className='cart-noitem'>
        <InfoMessage type={'nocart'}/>
        <BtnShort className={"nocart-btn"} fillType={"eyeshop"} fillTo={"/product"}/>
        {/* 버튼 눌렀을 때 카테고리 다이어리로 이동하게 경로 설정? */}
      </div>
    </>
  )
}

export default CartList