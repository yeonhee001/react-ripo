import React from 'react'

function BtnLong({className, label, isActive=false, onClick, type='button'}) {

  return (
    <button className={`btnlong ${isActive ? 'active' : 'disabled'} ${className}`} onClick={isActive ? onClick : undefined} type={type}>
      <p className='btnlong-label'>{label}</p>
    </button> 
  )
}

// 사용방법 : <BtnLong className={'signup-btn'} label={'회원가입'} isActive={jointext4.trim().length>0 && agreeOption1===true} onClick={()=>{signupClick();}} type={'submit'}/>

export default BtnLong