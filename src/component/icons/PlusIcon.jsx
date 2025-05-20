import React from 'react'

function PlusIcon({ className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
        <img src="/imgs/_icons/PlusIcon.svg" alt="plusicon"/>
    </div>
  )
}

export default PlusIcon