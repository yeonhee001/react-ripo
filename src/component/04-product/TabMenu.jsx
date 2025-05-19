import React, { useEffect, useState } from 'react'

function TabMenu({ type, onTabChange, selectedTab }) {
  // 제목 입력, 선택된 탭 기억, 탭에 따라 내용
  
  const [addClass, setAddClass] = useState(0);

  const tab = {
    product: {
      title: ['상세정보', '문의']
    },
    // inquiry: {
    //   title: ['문의하기', '문의내역']
    // }
  }
    
  useEffect(() => {
      if (selectedTab !== undefined) {
          setAddClass(selectedTab);
      }
  }, [selectedTab]);

  function clickEvent(index) {
      setAddClass(index);
      if(onTabChange) {
          onTabChange(index);
      }
  }

  return (
    <div className='tabmenu'>
      {
          tab[type].title.map((item, i) => (
              <div key={i}
                  className={i === addClass ? 'active' : ''}
                  onClick={() => clickEvent(i)}>
                {item}
              </div>
          ))
      }
    </div>
  )
}

export default TabMenu