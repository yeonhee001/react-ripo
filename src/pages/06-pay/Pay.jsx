import React, { useState } from 'react'
import PayDoneBar from '../../component/06-pay/PayDoneBar'
import ProductPrice from '../../component/_common/ProductPrice'
import PayForm from '../../component/06-pay/PayForm'
import BtnLong from '../../component/_common/BtnLong';
import '../../styles/06-pay/pay.scss';
import PayProductItem from '../../component/_common/PayProductItem';
import PayTypeBtn from '../../component/06-pay/PayTypeBtn';

function Pay() {
  const [typeSelect, setTypeSelect] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <PayDoneBar className={'pay-top'} titleClassName={'pay-title'} title={'배송지 정보'}/>
      <form onSubmit={handleSubmit}>
        <PayForm className={'pay-input'} label={'수령인'} name={'name'} value={formData.name} onChange={handleChange}/>
        <PayForm className={'pay-input'} label={'전화번호'} name={'phone'} type={'number'} value={formData.phone} onChange={handleChange}/>
        <PayForm className={'pay-input'} label={'상세주소'} name={'address'} value={formData.address} onChange={handleChange}/>
      </form>
      <PayDoneBar className={'pay-top'} titleClassName={'pay-title'} title={'주문 상품'}/>
      <PayProductItem img={'/imgs/favicon32-1.png'} title={'스티커'} num={'1'} price={'7,800'}/>

      <PayDoneBar className={'pay-top'} titleClassName={'pay-title'} title={'결제 방식'}/>
      <div className='paytype'>
        <PayTypeBtn label={'신용/체크카드'}/>
        <PayTypeBtn label={'무통장입금'}/>
      </div>
      <PayDoneBar className={'pay-top'} titleClassName={'pay-title'} title={'결제 금액'}/>
      <ProductPrice className={'pay-productprice01'} titleClassName={'pay-title01'} priceClassName={'pay-price01'} title={'총 상품금액(개)'} price={'19,800'}/>
      <ProductPrice className={'pay-productprice01'} titleClassName={'pay-title01'} priceClassName={'pay-price01'} title={'총 배송비'} price={'2,500'}/>

      <ProductPrice className={'pay-productprice02'} titleClassName={'pay-title02'} priceClassName={'pay-price02'} title={'총 주문금액'} price={'22,100'}/>

      <BtnLong className={'btnlong-pay'} label={'결제하기'} goto={"/pay/done"}/>
    </div>
  )
}

export default Pay