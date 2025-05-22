import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PayDoneBar from '../../component/_common/PayDoneBar'
import PayProductItem from '../../component/_common/PayProductItem';
import InfoMessage from '../../component/_common/InfoMessage';
import '../../styles/07-mypage/orderList.scss';

function OrderList() {

  const [orderList, setOrderList] = useState([]);
  const [ctgrList, setCtgrList] = useState([]); // 카테고리 리스트

  useEffect(()=>{
    const memId = sessionStorage.getItem('mem_id');

    axios.get(`http://localhost/admin/api/orders.php?mem_id=${memId}`)
    .then(res=>{
      setOrderList(res.data);
    })
  },[])

  const formatDate = (datetime)=>{
    return datetime ? datetime.slice(0,10) : '';
  };
  let sameDate = '';

  useEffect(() => {
    if(orderList.length === 0) return;  // orderList가 비어있으면 실행 안함

    axios.get('http://localhost/admin/api/category.php')
      .then(res => {
        const matchCtgr = orderList.map(item => {
          const ctgr = res.data.find(p => String(p.id) === String(item.cat_id));
          return ctgr?.cat_name ?? '';
        });
        setCtgrList(matchCtgr);
      })
      .catch(e => console.error('카테고리 데이터 불러오기 실패', e));
  }, [orderList]);
  

  return (
    <div className='orderList'>
      <h2 className='order-toptitle'>주문내역</h2>

      {
        orderList.length === 0 ? (
          <InfoMessage type={'noorder'}/>
        ) : (
          <>
            <PayDoneBar className={'order-top'} titleClassName={'order-title'} dayClassName={'order-day'} title={'결제완료'} />
            {orderList.map((item, i) => {
              const formattedDate = formatDate(item.created_at);
              const showDate = formattedDate !== sameDate;
              if (showDate) sameDate = formattedDate;
      
              return (
                <React.Fragment key={item.id}>
                  {showDate && (
                    <div className='order-date'>
                      <p>{formattedDate}</p>
                    </div>
                  )}
                  <PayProductItem
                    type={ctgrList[i]}
                    id={item.p_id}
                    imgurl={item.p_thumb}
                    title={item.p_name}
                    num={item.p_ea}
                    price={item.p_price}
                    click={true}
                  />
                </React.Fragment>
              );
            })}
          </>
        )
      }
    </div>
  )
}

export default OrderList