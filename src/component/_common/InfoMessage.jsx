import React from 'react'
import BoxIcon from '../icons/BoxIcon'
import PayIcon from '../icons/PayIcon'
import EmptyIcon from '../icons/EmptyIcon'
import ProductIcon from '../icons/ProductIcon'

function InfoMessage({type}) {
  const content = {
    nocart: {
      icon: <BoxIcon className={'nobox'}/>,
      txt: '텅',
      subtxt: '취향으로 가득 채워주세요!'
    },
    noorder: {
      icon: <BoxIcon className={'nobox'}/>,
      txt: '텅',
      subtxt: '주문 내역이 아직 없어요!'
    },
    pay: {
      icon: <PayIcon className={'onpay'}/>,
      txt: '결제 완료',
      subtxt: '주문하신 상품을 정성껏 준비하고 있어요!'
    },
    nofaq: {
      icon: <EmptyIcon className={'noempty'}/>,
      txt: '텅',
      subtxt: '문의 내역이 비어있어요!'
    },
    nosearch: {
      icon: <EmptyIcon className={'noempty'}/>,
      txt: '텅',
      subtxt: '검색 결과가 비어있어요!'
    },
    detailfaq: {
      icon: <ProductIcon className={'onproduct'}/>,
      txt: `궁금한 점이 있으신가요?
            리포가 전화로 친절하게 도와드릴게요!`,
      subtxt: `[마이페이지 > 전화걸기] 에서 바로 연결할 수 있어요.  
               자주 묻는 질문도 참고해보세요.`
    }
  }
  return (
    <div className={`info ${type==='detailfaq' ? 'info-detailfaq' : ''}`}>
      {content[type]?.icon}
      <p className='info-text'>
        {content[type]?.txt}
        <span>{content[type]?.subtxt}</span>
      </p>
    </div>
  )
}

// 사용방법 : <InfoMessage type={'nocart'}/>

export default InfoMessage