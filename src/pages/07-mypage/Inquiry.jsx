import React, { useState } from 'react'
import TabMenu from '../../component/_common/TabMenu'
import InquiryProductItem from '../../component/_common/InquiryProductItem';
import Accordion from '../../component/_common/Accordion';

function Inquiry() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const testdata = [
    {
      imgurl: '/imgs/기록01_다이어리03.jpg', 
      category: '기록공간 > 글쓰기서랍 > 다이어리',
      name: '핑크풋[만년형]와사비베어만년다이어리',
      date: '2025.05.10'
    },
    {
      imgurl: '/imgs/favicon32-1.png',
      category: '기록공간 > 꾸미기서랍 > 스티커',
      name: '느낌좋은하루 스티커팩 (5장)',
      date: '2025.05.15'
    },
  ]

  const testAccordiandata = [
    {
      tag: '상품문의',
      content: '혹시 재입고 예정 있나요? ㅠㅠ',
      answer: '',
      date: '2025.05.10'
    },
    {
      tag: '기타문의',
      content: '먼슬리-위클리-먼슬리-위클리 가 반복되는 구조인가요?',
      answer: '네 맞습니다! 먼슬리와 위클리가 교대로 반복됩니다 :)',
      date: '2025.05.14'
    },
  ]

  return (
    <div>
      <TabMenu type='inquiry' onTabChange={setSelectedTab}/>
      <div>
        {
          selectedTab === 0 
          ? 
            (
              testdata.map((item, i) => (
                <InquiryProductItem key={i} data={item}/>
              ))
            )
          : 
            (
              <>
                <p className='accordion-msg'>
                  <span>{testAccordiandata.length}</span> 개의 문의를 남겼어요!
                </p>
                <div className='accordion-container'>
                  {
                    testAccordiandata.map((item, index) => (
                      <Accordion 
                        key={index}
                        index={index}
                        data={item}
                        openIndex={openIndex}
                        setOpenIndex={setOpenIndex}/>
                    ))
                  }
                </div>
              </>
            )
        }
      </div>
    </div>
  )
}

export default Inquiry