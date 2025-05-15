import React from 'react'

function PayForm({className, label, name, type="text", value, onChange, placeholder}) {
  return (
    <div className={className}>
      <p>{label}</p>
      <input 
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default PayForm