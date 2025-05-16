import React from 'react'
import PayDoneBar from '../../component/_common/PayDoneBar'
import PayProductItem from '../../component/_common/PayProductItem';
import InfoMessage from '../../component/_common/InfoMessage';
import '../../styles/07-mypage/orderList.scss';

function OrderList() {

  const now = new Date(); // 또는 서버에서 받은 시간

  const days = (date) =>{
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',     // 2025
      month: '2-digit',    // 05
      day: '2-digit',      // 14
      hour: '2-digit',     // 14
      minute: '2-digit',   // 02
      hour12: false        // 24시간 형식 사용
    }).format(date)
      .replace(/\./g, '.')    // 마침표(.)는 그대로 두고
      .replace(/ /g, '');   // 공백을 없애는 걸로 변경
  };

  return (
    <div>
      <h2 className='order-toptitle'>주문내역</h2>

      <PayDoneBar className={'order-top'} titleClassName={'order-title'} dayClassName={'order-day'} title={'결제완료'} day={days(now)}/>
      <PayProductItem img={'/imgs/기록01_다이어리03.jpg'} title={'2025 볼펜 세트'} num={'1'} price={'11,800'}/>

      <InfoMessage type={'noorder'}/>
    </div>
  )
}

export default OrderList