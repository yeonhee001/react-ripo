import React, { useEffect } from 'react'
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

  // 최초 값: 현재 경로
  const [value, setValue] = React.useState(location.pathname);

  // 경로 바뀔 때마다 탭 상태 동기화
  useEffect(()=>{
    setValue(location.pathname);
  },[location.pathname]);

  // 클릭 시 탭 상태 업데이트
  function handleChange(event, newValue) {
    setValue(newValue);
  };

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
          bgcolor: 'white' 
        }}
        value={value}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction
          label="홈"
          value="/"
          icon={ value === '/' ? <HomeIconPurple/> : <HomeIconGray/> }
          component={NavLink}
          to="/"
        />
        <BottomNavigationAction
          label="검색"
          value="/search"
          icon={ value === '/search' ? <SearchIconPurple/> : <SearchIconGray/> }
          component={NavLink}
          to="/search"
        />
        <BottomNavigationAction
          label="카테고리"
          value="/category"
          icon={ value === '/category' ? <CtgrIconPurple/> : <CtgrIconGray/> }
          component={NavLink}
          to="/category"
        />
        <BottomNavigationAction
          label="장바구니"
          value="/cart"
          icon={ value === '/cart' ? <CartIconPurple/> : <CartIconGray/> }
          component={NavLink}
          to="/cart"
        />
        <BottomNavigationAction
          label="마이리포"
          value="/my"
          icon={ value === '/my' ? <MyIconPurple/> : <MyIconGray/> }
          component={NavLink}
          to="/my"
        />
      </BottomNavigation>
    </>
  )
}

export default MenuBar