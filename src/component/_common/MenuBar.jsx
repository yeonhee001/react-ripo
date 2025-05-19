import React from 'react'
import { NavLink, useLocation} from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAction, GlobalStyles } from '@mui/material';
import HomeIconGray from '../icons/HomeIconGray';
import SearchIconGray from '../icons/SearchIconGray';
import CtgrIconGray from '../icons/CtgrIconGray';
import CartIconGray from '../icons/CartIconGray';
import MyIconGray from '../icons/MyIconGray';
import HomeIconPurple from '../icons/HomeIconPurple';
import SearchIconPurple from '../icons/SearchIconPurple';
import CtgrIconPurple from '../icons/CtgrIconPurple';
import CartIconPurple from '../icons/CartIconPurple';
import MyIconPurple from '../icons/MyIconPurple';

function MenuBar() {
  const location = useLocation();

  // location이 pathname을 가지고 있어서 안보이게 할 페이지를 지정. 파라미터는 감지하지 못해 상품상세페이지는 별도 처리.
  const hiddenPaths = ["/splash", "/pay", "/pay/done", "/signup"];
  const pathSegments = location.pathname.split('/');
  // ['', 'product', 'type', 'id'] → 길이 4
  const isProductDetail = pathSegments[1] === 'product' && pathSegments.length === 4;
  const hideMenu = hiddenPaths.includes(location.pathname) || isProductDetail


  if (hideMenu) return null; // 해당 경로가 true일 때 렌더링 X

  // mui가 value 값이 정확히 일치할 때만 selected 상태로 파악하여 경로를 맞춰줌.
  // selected 상태일 때만 폰트 컬러가 들어가기 때문에 설정 필요.
  // 아래 경우가 아닌 경우는 value=null이므로 non-selected 상태.
  let navValue = null;
  if (location.pathname === '/') {
    navValue = '/';
  } else if (location.pathname.includes('/search')) {
    navValue = '/search';
  } else if (location.pathname.includes('/category')) {
    navValue = '/category';
  } else if (location.pathname.includes('/cart')) {
    navValue = '/cart';
  } else if (location.pathname.includes('/my')) {
    navValue = '/my';
  }

  return (
    <>
    <GlobalStyles
      // 스타일 처리
      styles={{
        '.MuiBottomNavigation-root': {
          height: '68px !important',
        },
        '.MuiBottomNavigationAction-root': {
          padding: '0 !important',
          minWidth: '50px !important',
          alignItems: 'center'
        },
        '.MuiBottomNavigationAction-root.Mui-selected': {
          color: '#9257E9 !important',
          padding: '0 !important',
          minWidth: '50px !important',
        },
        '.MuiBottomNavigationAction-label': {
          fontFamily: 'S-CoreDream-4Regular !important',
          color: 'rgba(0,0,0,0.3)',
          fontSize: '0.7rem !important'
        },
        '.MuiBottomNavigationAction-label.Mui-selected': {
          color: '#9257E9',
          fontSize: '0.7rem !important'
        },
      }}
    />
      <BottomNavigation
        sx={{ 
          width: '100%', maxWidth: 480,
          mx: 'auto', position: 'fixed', 
          left: 0, right: 0, bottom: 0, 
          bgcolor: 'white', 
          zIndex: 9999
        }}
        value={navValue}
        showLabels
      >
        <BottomNavigationAction
          label="홈"
          value="/"
          icon={ location.pathname === '/' ? <HomeIconPurple/> : <HomeIconGray/> }
          component={NavLink}
          to="/"
        />
        <BottomNavigationAction
          label="검색"
          value="/search"
          icon={ location.pathname.includes('/search') ? <SearchIconPurple/> : <SearchIconGray/> }
          component={NavLink}
          to="/search"
        />
        <BottomNavigationAction
          label="카테고리"
          value="/category"
          icon={ location.pathname.includes('/category') ? <CtgrIconPurple/> : <CtgrIconGray/> }
          component={NavLink}
          to="/category"
        />
        <BottomNavigationAction
          label="장바구니"
          value="/cart"
          icon={ location.pathname.includes('/cart') ? <CartIconPurple/> : <CartIconGray/> }
          component={NavLink}
          to="/cart"
        />
        <BottomNavigationAction
          label="마이리포"
          value="/my"
          icon={ location.pathname.includes('/my') ? <MyIconPurple/> : <MyIconGray/> }
          component={NavLink}
          to="/my"
        />
      </BottomNavigation>
    </>
  )
}

export default MenuBar