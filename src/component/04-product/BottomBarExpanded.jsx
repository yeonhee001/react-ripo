import React from 'react'
import PlusIcon from '../icons/PlusIcon'
import MinusIcon from '../icons/MinusIcon'
import { useNavigate } from 'react-router-dom'

function BottomBarExpanded({ isOpen, onClose }) {
    const navi = useNavigate();

  return (
    <div className={`bottombar-expanded ${isOpen ? 'active' : ''}`}>
        <div className='bottombar-drag-handle'/>
        <div className='expanded-content'>
            <div className='expanded-content-top'>
                <div className='select-num'>
                    <MinusIcon/>
                    <span>1</span>
                    <PlusIcon/>
                </div>
                <span>11,800 원</span>
            </div>

            <div className='expanded-content-bottom'>
                <p>구매수량 <span>1</span> 개</p>
                <span>총 11,800 원</span>
            </div>
            
            <div className='bottombar-btnbox'>
                <div className='btnshort-line bottombar'>
                    <p>장바구니에 담기</p>
                </div>
                <div className='btnshort-fill bottombar' onClick={() => navi('/pay')}>
                    <p>구매하기</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomBarExpanded