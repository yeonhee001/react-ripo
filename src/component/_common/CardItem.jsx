import React from 'react'
import { useNavigate } from 'react-router-dom'

function CardItem({ type, imgurl, name, price, id }) {
  const navigate = useNavigate();
  function goToDetailPage() {
    navigate(`/product/${type}/${id}`);
  }

  const firstImg = imgurl.split(',')[0];

  return (
    <>
      <figure onClick={goToDetailPage}>
        <img src={`${process.env.REACT_APP_APIURL_IMG}/${firstImg}`} alt="img" />
        <figcaption>
          <p>{name}</p>
          <span>{Number(price).toLocaleString()}</span>
        </figcaption>
      </figure>
    </>
  )
}

export default CardItem