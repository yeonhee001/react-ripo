import React from 'react'

function ProductSlide({ imgurl }) {

  return (
    <p className='productslide-img'>
        <img src={`http://localhost/admin/product/upload/${imgurl}`} alt="상품디테일-img" />
    </p>
  )
}

export default ProductSlide