import React from 'react'

function PayDoneBar({className, titleClassName, title}) {
  return (
    <div className={className}>
      <p className={titleClassName}>{title}</p>
    </div>
  )
}

export default PayDoneBar