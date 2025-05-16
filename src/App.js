import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Splash from './pages/Splash';
import Home from './pages/01-home/Home';
import SearchPage from './pages/02-search/SearchPage';
import SearchDetail from './pages/02-search/SearchDetail';
import Category from './pages/03-category/Category';
import ProductList from './pages/04-product/ProductList';
import ProductDetail from './pages/04-product/ProductDetail';
import CartList from './pages/05-cart/CartList';
import Pay from './pages/06-pay/Pay';
import PayDone from './pages/06-pay/PayDone';
import My from './pages/07-mypage/My';
import Faq from './pages/07-mypage/Faq';
import Inquiry from './pages/07-mypage/Inquiry';
import Notice from './pages/07-mypage/Notice';
import OrderList from './pages/07-mypage/OrderList';
import Login from './pages/00-login/Login';
import Signup from './pages/00-login/Signup';
import Header from './component/_common/Header';
import MenuBar from './component/_common/MenuBar';
import InquiryWrite from './pages/07-mypage/InquiryWrite';
import './styles/_style.scss';

function App() {
  // 렌더링 전에 splash로 보낼지 판단
  const pathname = window.location.pathname;
  const isRoot = pathname === "/";
  const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
  const lastVisit = localStorage.getItem("visited");
  const inNewDay = lastVisit != today;

  if (isRoot && inNewDay) {
    localStorage.setItem("visited", today);
    window.location.replace("/splash");
    return null; 
  }

  return (
    <Router>
      <Header/>

      <main>
        <Routes>
          <Route path='/splash' element={<Splash/>}/>
          <Route path='/' element={<Home/>}/>

          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/search/searchdetail/:word' element={<SearchDetail/>}/>

          <Route path='/category' element={<Category/>}/>

          <Route path='/product:type' element={<ProductList/>}/>
          <Route path='/product:type/productdetail/:id' element={<ProductDetail/>}/>

          <Route path='/cart' element={<CartList/>}/>

          <Route path='/pay' element={<Pay/>}/>
          <Route path='/pay/done' element={<PayDone/>}/>

          <Route path='/my' element={<My/>}/>
          <Route path='/my/faq' element={<Faq/>}/>
          <Route path='/my/inquiry' element={<Inquiry/>}/>
          <Route path='/my/inquiry/write' element={<InquiryWrite/>}/>
          <Route path='/my/notice' element={<Notice/>}/>
          <Route path='/my/orderlist' element={<OrderList/>}/>

          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </main>

      <MenuBar/>
    </Router>
  );
}

export default App;
