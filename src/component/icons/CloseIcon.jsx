import React from 'react'

function CloseIcon({className, onClick}) {
  return (
    <div className={className} onClick={onClick}>
        <img src="/imgs/_icons/CloseIcon.svg" alt="closeicon"/>
    </div>
  )
}

export default CloseIcon