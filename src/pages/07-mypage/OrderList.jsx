import React from 'react'
import PayDoneBar from '../../component/06-pay/PayDoneBar'

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
      <PayDoneBar className={'paydone-top'} titleClassName={'paydone-title'} dayClassName={'paydone-day'} title={'결제완료'} day={days(now)}/>
    </div>
  )
}

export default OrderList