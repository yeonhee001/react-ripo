import React from 'react'
import { NavLink } from 'react-router-dom'

function SnackBar({ type }) {
  const msgs = {
    add: '상품을 장바구니에 담았어요!',
    already: '이미 장바구니에 있는 상품이에요.',
    error: '문제가 발생했습니다. 다시 시도해주세요.'
  }

  return (
    <div className='snackbar'>
      <p>{msgs[type]}</p>
      <NavLink to="/cart">보러가기</NavLink>
    </div>
  )
}

export default SnackBar