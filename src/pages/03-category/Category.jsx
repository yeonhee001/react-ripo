import React, { useEffect, useState } from 'react'
import axios from 'axios';
import RecordIcon from '../../component/icons/RecordIcon';
import CategorySub from '../../component/03-category/CategorySub';
import WriteIcon from '../../component/icons/WriteIcon';
import '../../styles/03-category/category.scss'

function Category() {
  const [catData, setCatData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost/admin/api/category.php')
    .then(res=>{
      setCatData(res.data)
    })
  },[])

  // 대카테고리 필터. 구분선(hr) 조건을 위함.
  const parentCategory = catData.filter(parent => parent.cat_level === "0");
  
  return (
    <div className='category'>
      <h2 className='category-title'>카테고리</h2>
      {
        parentCategory.map((parent, index) => (
          <div key={parent.id} className='category-box'>
            <div className='category-parent'>
              {
                parent.id === '1' ? (
                  <RecordIcon className={'category-parent-icon'}/>
                ) : (
                  <WriteIcon className={'category-parent-icon'}/>
                )
              }
              <p>{parent.cat_name}</p>
            </div>
            {
              catData.filter(sub => sub.cat_level === "1" && parent.id === sub.cat_parent).map(sub => (
                <CategorySub key={sub.id} 
                  data={catData} subData={sub} name={sub.cat_name}/>
              ))
            }
            {index !== parentCategory.length - 1 && <hr />}
          </div>
        ))
      }
    </div>
  )
}

export default Category