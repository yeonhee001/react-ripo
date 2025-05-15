import React, { useState } from 'react'
import TabMenu from '../../component/_common/TabMenu'

function ProductDetail() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <TabMenu type='product' onTabChange={setSelectedTab}/>
      <div>
        {selectedTab === 0 ? '상세정보' : '문의'}
      </div>
    </div>
  )
}

export default ProductDetail