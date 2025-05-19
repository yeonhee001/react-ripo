import React from 'react'
import CloseIcon from '../icons/CloseIcon'
import AgreeCheck from '../_common/AgreeCheck'

function CartItem({imgurl, title, num, price}) {

  const firstImg = imgurl.split(',')[0];
  
  return (
    <div className='cartproductitem'>
      <CloseIcon className={'cart-closebtn'}/>
      <div className='cart-checkitem'>
        <div className='cart-check'>
          <AgreeCheck className={'cart-mui-check'}/>
        </div>
        <img src={`http://localhost/admin/product/upload/${firstImg}`} alt="cart-product" />
      </div>
      <div className='cart-checkinfo'>
        <b>{title}</b>
        <span>수량 {num}</span>
        <p>{price}원</p>
      </div>
    </div>
  )
}

export default CartItem