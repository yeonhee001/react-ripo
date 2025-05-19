import React from 'react'
import { useNavigate } from 'react-router-dom';
import RightIcon from '../icons/RightIcon'

function CategoryItem({className, goto, textClassName, label, iconclassName, onClick}) {
  
  const navi = useNavigate();
  const ctgrClick = (to)=>{
    if(onClick) onClick();
    if(to) navi(to);
  }

  return (
    <div className={className} onClick={()=>ctgrClick(goto)}>
      <p className={textClassName}>{label}</p>
      <span><RightIcon className={iconclassName}/></span>
    </div>
  )
}

export default CategoryItem