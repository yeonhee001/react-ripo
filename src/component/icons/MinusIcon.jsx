import React from 'react'

function MinusIcon({ className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
        <img src="/imgs/_icons/MinusIcon.svg" alt="minusicon"/>
    </div>
  )
}

export default MinusIcon