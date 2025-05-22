import React from 'react'

function ProductSlide({ imgurl }) {

  return (
    <p className='productslide-img'>
        <img src={`${process.env.REACT_APP_APIURL_IMG}/${imgurl}`} alt="상품디테일-img" />
    </p>
  )
}

export default ProductSlide