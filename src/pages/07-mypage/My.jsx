import React from 'react'
import CategoryItem from '../../component/_common/CategoryItem'
import AlertBtn2 from '../../component/_common/AlertBtn2';
import '../../styles/07-mypage/my.scss';


function My() {
  return (
    <div>
      <h2 className='my-toptitle'>마이리포</h2>

      <div className='my-user'>
        <p className='my-user-name'>안녕하세요, 아리포님</p>
        <span className='my-user-id'>아이디</span>
      </div>

      <div className='mypage-ctgr'>
        <CategoryItem className={'mypage-item'} goto={'/my/inquiry'} textClassName={'mypage-label'} label={'1:1 문의'} iconclassName={'mypage-right'}/>
        <CategoryItem className={'mypage-item'} goto={'/my/orderlist'} textClassName={'mypage-label'} label={'주문내역'} iconclassName={'mypage-right'}/>
        <CategoryItem className={'mypage-item'} goto={'/my/faq'} textClassName={'mypage-label'} label={'자주 묻는 질문'} iconclassName={'mypage-right'}/>
        <CategoryItem className={'mypage-item'} goto={'/my/notice'} textClassName={'mypage-label'} label={'공지사항'} iconclassName={'mypage-right'}/>
        <CategoryItem className={'mypage-item'} textClassName={'mypage-label'} label={'전화걸기'} iconclassName={'mypage-right'}/>
      </div>

      <div className='my-logout'>
        <p>로그아웃</p>
      </div>
      {/* <AlertBtn2 type={'logoutError'}/> */}
    </div>
  )
}

export default My