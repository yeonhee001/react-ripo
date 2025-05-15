import React from 'react'
import { useNavigate } from 'react-router-dom'

function CardItem({imgurl, name, price, id}) {
  const navigate = useNavigate();
  function goToDetailPage() {
    navigate(`/product/productdetail/${id}`);
  }

  return (
    <>
      <figure onClick={goToDetailPage}>
        <img src={imgurl} alt="img" />
        <figcaption>
          <p>{name}</p>
          <span>{Number(price).toLocaleString()}</span>
        </figcaption>
      </figure>
    </>
  )
}

export default CardItem