import React from 'react'
import BackIcon from '../icons/BackIcon';
import CloseIcon from '../icons/CloseIcon';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  
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
  } else if (pathname==='/search' || pathname==='/category' || pathname==='/cart' || pathname==='/my' || pathname==='/splash') {
    head = "";
  }else if (pathname==='/my/inquiry/write' || pathname==='/pay/done' || pathname==='/my/orderlist') {
    head = <CloseIcon className={'closeicon'} onClick={handleCloseIcon}/>;
  } else {
    head = <BackIcon className={'backicon'} onClick={()=>navigate(-1)}/>;
  }

  return (
    <header className='header'>
      <h2> {head} </h2>
    </header>
  )
}

export default Header