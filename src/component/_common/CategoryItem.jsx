import React from 'react'
import RightIcon from '../icons/RightIcon'

function CategoryItem({className, onClick, textClassName, label, iconclassName}) {
  return (
    <div className={className} onClick={onClick}>
      <p className={textClassName}>{label}</p>
      <span><RightIcon className={iconclassName}/></span>
    </div>
  )
}

export default CategoryItem