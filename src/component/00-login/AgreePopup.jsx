import React from 'react'

function AgreePopup({type, onConfirm}) {
    const popupcheck = {
        popup01: {
            title : '이용약관 및 개인정보처리방침',
            txt : `제1조(목적)
                    이 약관은 주식회사 리포 회사(전자상거래 사업자)가 
                    운영하는 사이버몰에서 제공하는 서비스와 이를 
                    이용하는 회원의 권리·의무 및 책임사항을 규정함을 
                    목적으로 합니다.
                    제2조(용어의 정리)
                    이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                    그리고 여기에서 정의되지 않은 이 약관상의 용어의
                    의미는 일반적인 거래관행에 따릅니다.
                    “사이버몰”이란 회사가 상품 또는 용역 등(일정한 
                    시설을 이용하거나 용역을 제공받을 수 있는 권리를 
                    포함하며, 이하 “상품 등”)을 회원에게 제공하기 
                    위하여 컴퓨터 등 정보통신설비를 이용하여 상품 등을
                    거래할 수 있도록 설정한 웹사이트 등을 의미합니다.`
        },
        popup02: {
            title : '마케팅 정보 수집 및 수신 동의',
            txt : `마케팅 수신 동의
                    1. 수집항목 : 이메일, SMS
                    2. 이용목적 : 상품 소개 및 이벤트 정보 등의 안내
                    3. 보유기간 : 별도 동의 철회 시까지`
        }
    }
  return (
    <div className='signup-popupall'>
        <div className='signup-popupcheck'>
            <div className='signup-popup-txt'>
                <b>{popupcheck[type].title}</b>
                <p>{popupcheck[type].txt}</p>
            </div>
            <div className='signup-popup-confirm' onClick={onConfirm}>
                <p>확인</p>
            </div>
        </div>
    </div>
  )
}

export default AgreePopup