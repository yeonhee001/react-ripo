import React from 'react'
import AgreeCheck from '../_common/AgreeCheck'

function AgreeItem({type, onClick, checked, onChange}) {
    const text = {
        option01: {
            txt : '[필수] 이용약관 및 개인정보처리방침'
        },
        option02: {
            txt : '[선택] 마케팅 정보 수집 및 수신 동의'
        },
    }

  return (
    <div className='agreeitem'>
        <div className='agreeitem-text'>
            <AgreeCheck className={'agreecheck-item'} checked={checked} onChange={onChange}/>
            <p>{text[type]?.txt}</p>
        </div>
        <span onClick={onClick}>보기</span>
    </div>
  )
}

export default AgreeItem