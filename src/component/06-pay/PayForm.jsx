import React from 'react'

function PayForm({className, label, name, type="text", value, onChange}) {
  return (
    <div className={className}>
      <p>{label}</p>
      {name && (
        <input 
          id={name}
          name={name}
          type={type}
          value={value || ''}
          onChange={onChange}
          readOnly={!onChange}
        />
      )}
    </div>
  )
}

export default PayForm