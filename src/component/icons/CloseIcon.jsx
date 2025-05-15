import React from 'react'
import { useNavigate } from 'react-router-dom';

function CloseIcon({className, goto}) {

  const navi = useNavigate();
  const closeClick = (to)=>{
    if(to) navi(to);
  }

  return (
    <div className={className} onClick={()=>closeClick(goto)}>
        <img src="/imgs/_icons/CloseIcon.svg" alt="closeicon"/>
    </div>
  )
}

export default CloseIcon