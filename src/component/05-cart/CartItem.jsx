import React from 'react'
import CloseIcon from '../icons/CloseIcon'
import AgreeCheck from '../_common/AgreeCheck'
import { useNavigate } from 'react-router-dom';

function CartItem({onClick, type, id, imgurl, title, num, price, checked, onChange}) {

  const navi = useNavigate();
  
  function goto(){
    navi(`/product/${type}/${id}`);
  }

  return (
    <div className='cartproductitem'>
      <CloseIcon className={'cart-closebtn'} onClick={onClick}/>
      <div className='cart-checkitem'>
        <div className='cart-check'>
          <AgreeCheck className={'cart-mui-check'} checked={checked} onChange={onChange}/>
        </div>
        <img src={`${process.env.REACT_APP_APIURL_IMG}/${imgurl}`} alt="cart-product" />
      </div>
      <div className='cart-checkinfo' onClick={goto}>
        <b>{title}</b>
        <span>수량 {num}</span>
        <p>{Number(price).toLocaleString()}원</p>
      </div>
    </div>
  )
}

export default CartItem