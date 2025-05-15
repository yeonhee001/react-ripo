import React from 'react'
import PayDoneBar from '../../component/06-pay/PayDoneBar'
import ProductPrice from '../../component/_common/ProductPrice'
import BtnLong from '../../component/_common/BtnLong';
import '../../styles/05-cart/cart.scss';

function CartList() {
  return (
    <div>
      <PayDoneBar className={'cart-top'} titleClassName={'cart-title'} title={'장바구니'}/>
      <ProductPrice className={'cart-productprice01'} titleClassName={'cart-title01'} priceClassName={'cart-price01'} title={'총 상품금액(개)'} price={'19,800'}/>

      <BtnLong className={'btnlong-pay'} label={'구매하기'} goto={"/pay/done"}/>

    </div>
  )
}

export default CartList