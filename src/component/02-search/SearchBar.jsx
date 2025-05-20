import React from 'react'

function SearchBar({ onSubmit, placeholder, value, onChange, submitbtn }) {
  return (
    <form className='searchbar' onSubmit={onSubmit}>
        <input type="text" placeholder={placeholder} 
            value={value} onChange={onChange} name='search' />
        <button type="submit">{submitbtn}</button>
    </form>
  )
}

export default SearchBar