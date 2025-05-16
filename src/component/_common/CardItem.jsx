import React from 'react'
import { useNavigate } from 'react-router-dom'

function CardItem({imgurl, name, price, id}) {
  const navigate = useNavigate();
  function goToDetailPage() {
    navigate(`/product/productdetail/${id}`);
  }

  const firstImg = imgurl.split(',')[0];

  return (
    <>
      <figure onClick={goToDetailPage}>
        <img src={`http://localhost/admin/product/upload/${firstImg}`} alt="img" />
        <figcaption>
          <p>{name}</p>
          <span>{Number(price).toLocaleString()}</span>
        </figcaption>
      </figure>
    </>
  )
}

export default CardItem