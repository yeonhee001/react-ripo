import React from 'react'

function BackIcon({className, onClick}) {
  return (
    <div className={className} onClick={onClick}>
        <img src="/imgs/_icons/BackIcon.svg" alt="backicon" />
    </div>
  )
}

export default BackIcon