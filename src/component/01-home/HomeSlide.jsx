import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeSlide({ imgurl, name, type, id }) {
    const firstImg = imgurl.split(',')[0];

  return (
    <div>
        <NavLink to={`/product/${type}/${id}`}>
            <p className='home-mainimg'>
                <img src={`http://localhost/admin/product/upload/${firstImg}`} alt="메인슬라이드-img" />
            </p>
            <div className='home-main-text'>
                <p>{name}</p>
                <span>{type}</span>
            </div>
        </NavLink>
    </div>
  )
}

export default HomeSlide