import React from 'react'

function PayProductItem({img, title, num, price}) {
  return (
    <div className='payproductitem'>
      <p className='productitem-img'>
        <img src={img} alt="productimg" />
      </p>
      <div className='productitem-text'>
        <b>{title}</b>
        <span>수량 {num}</span>
        <p>{price}원</p>
      </div>
    </div>
  )
}

export default PayProductItem