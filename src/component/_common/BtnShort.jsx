import React from 'react'
import { useNavigate } from 'react-router-dom'

function BtnShort({className, lineType, fillType, lineTo, fillTo}) {

  const navi = useNavigate();
  const btnSClick = (to)=>{
    if(to) navi(to);
  }
  const line = {
    order: {
      txt: '주문상세 보기'
    },
    quest: {
      txt: '자주묻는질문'
    }
  }
  const fill = {
    shopping: {
      txt: '계속 쇼핑하기'
    },
    quest: {
      txt: '전화하러 가기'
    },
    eyeshop: {
      txt: '구경하러 가기'
    },
    all: {
      txt: '전체 상품 둘러보기'
    }
  }


  return (
    <div className={className}>
      {lineType &&
        (<div className='btnshort-line' onClick={()=>btnSClick(lineTo)}>
          <p>{line[lineType]?.txt}</p>
        </div>)
      }
      {fillType &&
        (<div className='btnshort-fill' onClick={()=>btnSClick(fillTo)}>
          <p>{fill[fillType]?.txt}</p>
        </div>)
      }
    </div>
  )
}

// 사용방법 : <BtnShort className={className} fillType={"quest"} fillTo={"/my/faq"}/>

export default BtnShort