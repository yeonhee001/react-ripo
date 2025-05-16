import React from 'react'

function PayDoneBar({className, titleClassName, dayClassName, title, day}) {
  return (
    <div className={className}>
      <p className={titleClassName}>{title}</p>
      {day && <span className={dayClassName}>{day}</span>}
    </div>
  )
}

export default PayDoneBar