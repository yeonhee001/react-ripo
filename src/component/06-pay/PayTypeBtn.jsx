import React from 'react'

function PayTypeBtn({label, isActive, onClick}) {
  return (
    <div className={`paytypebtn  ${isActive? 'active' : ''}`} onClick={onClick}>
      <p className='payname'>{label}</p>
    </div>
  )
}

export default PayTypeBtn