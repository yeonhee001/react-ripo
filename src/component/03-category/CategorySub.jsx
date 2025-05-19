import React from 'react'
import CategoryItem from '../_common/CategoryItem'

function CategorySub({ data, subData ,name }) {
  return (
    <div className='category-sub'>
        <p className='category-sub-txt'>{name}</p>
        {
            data.filter(item => item.cat_level === "2" && subData.id === item.cat_parent).map(item => (
                <CategoryItem 
                    key={item.id}
                    className={'category-item'}
                    goto={`/product/${encodeURIComponent(item.cat_name)}`}
                    textClassName={'category-item-txt'}
                    label={item.cat_name}
                    iconclassName={'category-item-icon'}
                />
            ))
        }
    </div>
  )
}

export default CategorySub