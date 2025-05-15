import React from 'react'
import { useNavigate } from 'react-router-dom'

function BtnLong({className, label, isActive=false, goto}) {

  const navi = useNavigate();
  const btnLClick = (to)=>{
    if(to) navi(to);
  }

  return (
    <div className={`btnlong ${isActive ? 'active' : ''} ${className}`} onClick={()=>btnLClick(goto)}>
      <p className='btnlong-label'>{label}</p>
    </div> 
  )
}

// 사용방법 : <BtnLong label={'사용할 버튼 이름'} isActive={text.trim().length > 0} goto={"이동경로"}/>

export default BtnLong