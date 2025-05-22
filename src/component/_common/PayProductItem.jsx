import React from 'react'
import { useNavigate } from 'react-router-dom'

function PayProductItem({type, id, imgurl, title, num, price, click=false}) {

  const navi = useNavigate();
  function goToDetailPage(){
    if(click){
      navi(`/product/${type}/${id}`)
    }
  };

  return (
    <div className='payproductitem' onClick={goToDetailPage}>
      <p className='productitem-img'>
        <img src={`${process.env.REACT_APP_APIURL_IMG}/${imgurl}`} alt="productimg" />
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