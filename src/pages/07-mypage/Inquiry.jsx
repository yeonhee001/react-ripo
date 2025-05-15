import React, { useState } from 'react'
import TabMenu from '../../component/_common/TabMenu'
import InquiryProductItem from '../../component/_common/InquiryProductItem';
import Accordion from '../../component/_common/Accordion';

function Inquiry() {
  const [selectedTab, setSelectedTab] = useState(0);

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
              <Accordion/>
            )
        }
      </div>
    </div>
  )
}

export default Inquiry