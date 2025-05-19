import React from 'react'

function ProductSlide({ imgurl }) {

  return (
    <div className='productslide'>
        <p className='productslide-img'>
            <img src={`http://localhost/admin/product/upload/${imgurl}`} alt="상품디테일-img" />
        </p>
    </div>
  )
}

export default ProductSlide