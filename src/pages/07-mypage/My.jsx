import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CategoryItem from '../../component/_common/CategoryItem'
import AlertBtn2 from '../../component/_common/AlertBtn2';
import '../../styles/07-mypage/my.scss';
import { useNavigate } from 'react-router-dom';


function My() {

  const navi = useNavigate();
  const [showPopup, setShowPopoup] = useState(false);
  const [viewUser, setViewUser] = useState();
  
  const logoutClick = ()=>{
    setShowPopoup(true);
  };

  const logoutConfirm = ()=>{
    axios.get(`${process.env.REACT_APP_APIURL}/logout.php`,{
      withCredentials: true, // 세션 유지하려면 반드시 포함!
    })
    .then(res=>{
      sessionStorage.clear();
      // console.log("로그아웃 완료:", res.data);
      setShowPopoup(false);
      navi('/login');
    })
  };

  const logoutCancel = ()=>{
    setShowPopoup(false);
  };

  
  useEffect(()=>{
    const memId = sessionStorage.getItem('mem_id');

    if(!memId){
      navi('/login');
      return;
    }

    axios.get(`${process.env.REACT_APP_APIURL}/mypage.php`,{
      withCredentials: true, // 세션 유지하려면 반드시 포함!
    })
    .then(res=>{
      if(res.data && res.data.name) {
        setViewUser(res.data);
      } else {
        navi('/login');
      }
    })
  },[navi])
  
  // 통화 팝업 관리
  function callConfirm() {
    const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);

    if(isMobile) {
      window.location.href = 'tel:15880024';
    } else {
      alert('※ 웹 브라우저 환경에서는 통화 연결이 어렵습니다. \n1588-0024 로 전화해주세요.');
    }
  }

  if (!viewUser) return null;

  return (
    <div>
      <h2 className='my-toptitle'>마이리포</h2>

      <div className='my-user'>
        <p className='my-user-name'>안녕하세요, {viewUser?.name}님</p>
        <span className='my-user-id'>{viewUser?.id}</span>
      </div>

      <div className='mypage-ctgr'>
        {/* <CategoryItem className={'mypage-item'} goto={'/my/inquiry'} textClassName={'mypage-label'} label={'1:1 문의'} iconclassName={'mypage-right'}/> */}
        <CategoryItem className={'mypage-item'} goto={'/my/orderlist'} textClassName={'mypage-label'} label={'주문내역'} iconclassName={'mypage-right'}/>
        <CategoryItem className={'mypage-item'} goto={'/my/faq'} textClassName={'mypage-label'} label={'자주 묻는 질문'} iconclassName={'mypage-right'}/>
        <CategoryItem className={'mypage-item'} goto={'/my/notice'} textClassName={'mypage-label'} label={'공지사항'} iconclassName={'mypage-right'}/>
        <CategoryItem className={'mypage-item'} textClassName={'mypage-label'} label={'전화걸기'} iconclassName={'mypage-right'} onClick={callConfirm}/>
      </div>

      <div className='my-logout' onClick={logoutClick}>
        <p>로그아웃</p>
      </div>
      {showPopup && (
        <AlertBtn2 type={'logoutError'} onConfirm={logoutConfirm} onCancel={logoutCancel}/>
      )}
    </div>
  )
}

export default My