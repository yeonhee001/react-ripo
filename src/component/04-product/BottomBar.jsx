import React from 'react'
import BottomBarExpanded from './BottomBarExpanded'

function BottomBar({ isOpen, setIsOpen, onClose }) {

    function togglebar() {
        setIsOpen(!isOpen);
    }

  return (
    <div>
        {!isOpen && (
            <div className={`bottombar-wrapper ${isOpen ? 'open' : ''}`} >
                <div className='bottombar-drag-handle' onClick={togglebar}/>
                <div className='btnlong'>
                    <p className='btnlong-label' onClick={togglebar}>구매하기</p>
                </div>
            </div>
        )}

        <BottomBarExpanded isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  )
}

export default BottomBar