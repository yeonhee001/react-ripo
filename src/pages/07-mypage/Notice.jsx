import React, { useState } from 'react'
import Accordion from '../../component/_common/Accordion';
import '../../styles/07-mypage/notice.scss';

function Notice() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const noticeData = [
    {
      noticeType: '[이벤트안내]',
      title: '리포 5월의 혜택 이벤트 당첨자 안내',
      content: `안녕하세요, Ripo(리포)입니다.

                5/19(월) ~ 5/22(목)에 진행된 [5월의 혜택 잠금해제] 프로모션 내 이벤트 당첨자를 안내드립니다.

                당첨자에게는 개별 문자 안내를 드릴 예정이며, 25년 6월 이후 경품 발송 예정입니다.


                > 당첨자(1명): 킹콩아울렛 귀여운 도장 콕콕 양면스탬프 형광펜
                안*현 / 010****1006

                
                다시 한 번 당첨을 축하드립니다.

                감사합니다.`,
      date: '2025.05.23'
    },
    {
      noticeType: '[일반공지]',
      title: '리포 사칭 주의 안내',
      content: `안녕하세요, Ripo(리포) 입니다.

                리포를 사칭해 고객님들에게 유선으로 연락하여 개인정보를 요구하고 있다는 보이스피싱 유사사례가 접수되어 안내 드립니다.


                리포에서는 하기 2개 사항을 진행하지 않으니 참고해주시기 바랍니다.

                1. 유선을 통해 고객님의 개인정보를 절대로 수집하지 않습니다.
                2. 지정 번호(5001-1005)가 아닌 다른 연락처로 연락드리지 않습니다.


                상기 내용을 안내드리니 피해 사례가 생기지 않도록 주의 부탁드립니다.

                만약 리포를 사칭한 연락을 받으셨을 경우 문의부탁드립니다.


                감사합니다.

                좋아하는 모든 것을 기록하는 방법, Ripo`,
      date: '2025.04.10'
    },
    {
      noticeType: '[이벤트안내]',
      title: '리포 까치에게 소원빌기 경품 이벤트 당첨자 안내',
      content: `안녕하세요, Ripo(리포)입니다.

                1/27(월) ~ 1/29(수)에 진행된 [설 잠금해제] 프로모션 내 ‘까치에게 소원빌기’ 경품 이벤트 당첨자를 안내드립니다.

                당첨자에게는 개별 문자 안내를 드릴 예정이며, 25년 2월 이후 경품 발송 예정입니다.


                > 당첨자(2명):

                1. [핑크풋][공식정품]윌레스와그로밋조각도무송스티커 / 소*희 / 010****1001

                2. Baby Kisscut Maskingtape / 천*호 / 010****1002


                다시 한 번 당첨을 축하드립니다.

                감사합니다.`,
      date: '2025.01.30'
    },
  ]

  return (
    <div className='noticepage'>
      <h2 className='all-menu-title'>공지사항</h2>
      <div className='accordion-container'>
        {
          noticeData.map((item, index) => (
            <Accordion 
              key={index}
              index={index}
              data={item}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}/>
          ))
        }
      </div>
    </div>
  )
}

export default Notice