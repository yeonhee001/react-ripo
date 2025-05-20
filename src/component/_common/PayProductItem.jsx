import React from 'react'

function PayProductItem({imgurl, title, num, price}) {

  const firstImg = imgurl.split(',')[0];

  return (
    <div className='payproductitem'>
      <p className='productitem-img'>
        <img src={`http://localhost/admin/product/upload/${firstImg}`} alt="productimg" />
      </p>
      <div className='productitem-text'>
        <b>{title}</b>
        <span>수량 {num}</span>
        <p>{Number(price).toLocaleString()}원</p>
      </div>
    </div>
  )
}

export default PayProductItem