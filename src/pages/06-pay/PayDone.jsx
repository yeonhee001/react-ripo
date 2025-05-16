import React from 'react'
import InfoMessage from '../../component/_common/InfoMessage'
import BtnShort from '../../component/_common/BtnShort'
import '../../styles/06-pay/payDone.scss';

function PayDone() {
  return (
    <div>
      <InfoMessage type={'pay'}/>
      <BtnShort className={'paydone'} lineType={"order"} fillType={"shopping"} lineTo={"/my/orderlist"} fillTo={"/"}/>
    </div>
  )
}

export default PayDone