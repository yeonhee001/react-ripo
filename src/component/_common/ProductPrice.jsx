import React from 'react'

function ProductPrice({className, titleClassName, priceClassName, title, price}) {
  return (
    <div className={className}>
      <p className={titleClassName}>{title}</p>
      <span className={priceClassName}>{price}원</span>
    </div>
  )
}

export default ProductPrice