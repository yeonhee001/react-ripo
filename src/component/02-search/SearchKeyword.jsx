import React from 'react'

function SearchKeyword({ onClick, word }) {
  return (
    <div className='search-keyword' onClick={onClick}>
        {word}
    </div>
  )
}

export default SearchKeyword