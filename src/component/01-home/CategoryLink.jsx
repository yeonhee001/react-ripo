import React from 'react'
import { NavLink } from 'react-router-dom'

function CategoryLink({ data }) {

    return (
        <NavLink to={`/product/${data.name}`} className='categoryLink'>
            <div>
                <p><img src={data.imgurl} alt="카테고리" /></p>
                <span>{data.name}</span>
            </div>
        </NavLink>
    )
}

export default CategoryLink