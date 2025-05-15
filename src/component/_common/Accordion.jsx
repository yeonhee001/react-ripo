import React, { useState } from 'react'
import UpIcon from '../icons/UpIcon';
import DownIcon from '../icons/DownIcon';

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const testdata = [
    {
      tag: '상품문의',
      content: '혹시 재입고 예정 있나요? ㅠㅠ',
      date: '2025.05.10'
    },
    {
      tag: '기타문의',
      content: '먼슬리-위클리-먼슬리-위클리 가 반복되는 구조인가요?',
      date: '2025.05.14'
    },
    {
      title: '상품을 주문 하려면 어떻게 하나요?',
      content: '1. 로그인 후 구매하실 상품을 선택하여 장바구니 버튼을 클릭합니다.',
    },
  ]

  return (
    <div>
      {testdata.map((item, index) => (
        <div
          key={index}
          className={`qna-item ${openIndex === index ? 'open' : ''}`}
        >
          <div
            className="question"
            onClick={() => handleAccordion(index)}
          >
            {item.tag && (<span>{item.tag}</span>)}
            <p>{item.title ? item.title : item.content}</p>
            {item.date && (<span>{item.date}</span>)}
            <div className={`arrow-icon ${openIndex === index ? 'active' : ''}`}>
              {openIndex === index ? <UpIcon className="icon" /> : <DownIcon className="icon" />}
            </div>
          </div>
          {openIndex === index && (
            <div className="qna-answer">
              <p dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          )}
          {index < testdata.length - 1 && <hr />}
        </div>
      ))}
    </div>
  )
}

export default Accordion