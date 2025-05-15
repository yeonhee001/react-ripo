import React, { useEffect, useState } from 'react'
import RightIcon from '../icons/RightIcon'
import { useLocation } from 'react-router-dom';

function InquiryProductItem({ data }) {
  const [isWrite, setIsWrite] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname === '/my/inquiry/write') {
      setIsWrite(true);
    }
  },[location.pathname])
  
  return (
    <div className='InquiryProductItem'>
      <p className='InquiryProductItem-img'>
        <img src={data.imgurl} alt={data.name} />
      </p>
      <div className='InquiryProductItem-right'>
        <div className='InquiryProductItem-text'>
          <span>{data.category}</span>
          <p>{data.name}</p>
          <span>{data.date} 주문</span>
        </div>
        { isWrite ? '' : <RightIcon className={'InquiryProductItem-icon'}/> }
      </div>
    </div>
  )
}

export default InquiryProductItem