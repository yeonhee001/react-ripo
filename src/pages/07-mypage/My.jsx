import React from 'react'
import CategoryItem from '../../component/_common/CategoryItem'
import AlertBtn2 from '../../component/_common/AlertBtn2';
import '../../styles/07-mypage/my.scss';


function My() {
  return (
    <div>
      <CategoryItem className={'mypage-item'} textClassName={'mypage-label'} label={'1:1 문의'} iconclassName={'mypage-right'}/>
      <CategoryItem className={'mypage-item'} textClassName={'mypage-label'} label={'주문내역'} iconclassName={'mypage-right'}/>
      <CategoryItem className={'mypage-item'} textClassName={'mypage-label'} label={'자주 묻는 질문'} iconclassName={'mypage-right'}/>
      <CategoryItem className={'mypage-item'} textClassName={'mypage-label'} label={'공지사항'} iconclassName={'mypage-right'}/>
      <CategoryItem className={'mypage-item'} textClassName={'mypage-label'} label={'전화걸기'} iconclassName={'mypage-right'}/>
      <AlertBtn2 type={'logoutError'}/>
    </div>
  )
}

export default My