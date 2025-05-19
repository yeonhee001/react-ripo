import React, { useState } from 'react'
import Accordion from '../../component/_common/Accordion'
import '../../styles/07-mypage/faq.scss';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqData = [
    {
      title: '상품을 주문 하려면 어떻게 하나요?',
      content: `1. 로그인 후 구매하실 상품(옵션)을 선택하여 바로구매 or 장바구니를 선택합니다.

                2. 이동한 주문결제 화면에서 주문고객 정보, 배송지 정보를 확인합니다.

                3. 결제하실 결제수단을 선택 후, 결제하기 버튼을 선택하여 결제하면 주문이 완료됩니다.`,
    },
    {
      title: '주문한 상품을 조회하고 싶은데 어떻게 하나요?',
      content: '로그인 후 [마이페이지 → 주문내역] 에서 주문 내역을 확인하실 수 있습니다.',
    },
    {
      title: '주문한 상품을 취소하고 싶은데 어떻게 하나요?',
      content: `발송되지 않은 주문건의 경우 고객센터를 통하여 취소 접수 가능합니다.

                - 취소 문의 : 1588-0024`,
    },
    {
      title: '주문한 상품은 언제 배송되나요?',
      content: `배송 예정일은 배송지에 따라 차이가 있으며, 도서산간 지역 등은 3~5일 더 소요될 수 있습니다.

                악천후, 천재지변, 물량 수급 변동, 명절 연휴 등 예외적인 사유가 발생하면 다소 지연될 수 있는 점 양해 부탁드립니다.`,
    },
    {
      title: '상품을 받았는데 불량 같아요.',
      content: `받아 본 상품이 불량(하자)인 경우 받은 날로 부터 7일 이내 교환 또는 반품 신청이 가능합니다.
                상품 관리 방법 및 상품 상세 정보는 상세페이지를 먼저 확인해 주세요.

                - 교환 및 반품 접수 : 1588-0024

                *제품에 사용 흔적, 오염, 세탁, 케이스(포장) 손상, 라벨 제거, 사은품 사용 등의 사유 시 반품이 가능하지 않습니다.
                *상품 검수 시 불량(하자)이 아닌 경우 반품 관련 배송비가 청구됩니다.
                *불량, 오배송인 경우 고객센터로 연락주시길 바랍니다.`,
    },
    {
      title: '로그아웃은 어떻게 하나요?',
      content: `[마이리포] 메뉴에서 로그아웃 할 수 있으며, 순서는 다음과 같습니다.

                1. 마이리포 메뉴 선택
                2. 마이리포 하단에 보면 로그아웃 선택`,
    },
  ]

  return (
    <>
      <h2 className='all-menu-title'>자주 묻는 질문</h2>
      <div className='accordion-container faqdata'>
        {
          faqData.map((item, index) => (
            <Accordion 
              key={index}
              index={index}
              data={item}
              list={faqData}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}/>
          ))
        }
      </div>
    </>
  )
}

export default Faq