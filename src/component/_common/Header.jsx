import React from 'react'
import BackIcon from '../icons/BackIcon';
import CloseIcon from '../icons/CloseIcon';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const fullScreenPaths = [];   // 헤더 부분까지 요소가 차지하고 싶을 때(헤더 숨김 X)
  const pathSegments = location.pathname.split('/');
  const isProductDetail = pathSegments[1] === 'product' && pathSegments.length === 4;
  const isFullScreenPage = fullScreenPaths.includes(location.pathname) || isProductDetail
  
  function handleCloseIcon() {
    if(pathname==='/pay/done') {
      navigate('/')
    } else if(pathname==='/my/orderlist'){
      navigate('/my')
    } else {
      navigate(-1)
    }
  }

  let head;
  if(pathname==='/'){ 
    head = <img src='/imgs/logo.svg' alt=''/>;
  } else if (pathname==='/search' || pathname==='/category' || pathname==='/cart' || pathname==='/my' || pathname==='/splash' || pathname==='/login') {
    head = "";
  } else if (pathname==='/pay/done' || pathname==='/my/orderlist') {
    head = <CloseIcon className={'closeicon'} onClick={handleCloseIcon}/>;
  } else if (pathname.includes('searchdetail')) {
    head = "";
  } else {
    head = <BackIcon className={'backicon'} onClick={()=>navigate(-1)}/>;
  }

  return (
    <header className={`header ${isFullScreenPage ? 'absolute' : ''}`}>
      <h2> {head} </h2>
    </header>
  )
}

export default Header
