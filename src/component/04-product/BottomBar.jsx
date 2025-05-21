import React, { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from "framer-motion";
import BottomBarExpanded from './BottomBarExpanded'
import SnackBar from './SnackBar';

function BottomBar({ isOpen, setIsOpen, data }) {
    const [snack, setSnack] = useState(false);      // 랜더링 여부
    const [snackVisivle, setSnackVisible] = useState(false);      // 화면 표시 여부
    const [snackType, setSnackType] = useState(null);

    useEffect(()=>{
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.scrollTo({ top: window.scrollY });
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    },[isOpen])

    const handleAddtoCart = (type) => {
        setSnackType(type);
        setSnack(true);
        setSnackVisible(true);  // 스낵바 표시
        setIsOpen(false);
        
        setTimeout(() => {
            setSnackVisible(false);  // 투명하게 만들기 시작
            setTimeout(() => setSnack(false), 300);  // 300ms 후 DOM 제거 (transition duration과 맞춤)
        }, 3000);
    }

  return (
    <div className='bottombar-box'>
        {/* overlay */}
        {isOpen && <div className='bottombar-overlay' onClick={()=>setIsOpen(false)}/>}

        {/* 기본 */}
        {!isOpen && (
            <div className='bottombar-collapsed'>
                <div className='btnlong'  onClick={()=>setIsOpen(true)}>
                    {/* setTimeOut으로 상태 변경 시점 미뤄 이벤트나 렌더링 타이밍 문제 방지 */}
                    <p className='btnlong-label'>구매하기</p>
                </div>
            </div>
        )}

        {/* 확장 */}
        <BottomBarExpanded 
            isOpen={isOpen} setIsOpen={setIsOpen} data={data} onAddToCart={handleAddtoCart}
        />
        {/* <AnimatePresence>
            {isOpen && (
                <motion.div
                ref={containerRef}
                className={'productdetail-bottombar-motion'}
                initial={{ opacity: 0, transform: 'translateY(100%)' }} // 아래에서 시작
                animate={{ opacity: 1, transform: 'translateY(0%)' }} // 위로 올라오면서 나타남
                exit={{ opacity: 0, transform: 'translateY(100%)' }} // 사라질 땐 다시 아래로
                transition={{ duration: 0.3, delay: 0.1 }}
                onTouchStart={handleTouchStart}
                onTouchEnd={(e) => handleTouchEnd(e, 'down')}
                >
                    <BottomBarExpanded isOpen={isOpen} onClose={() => setIsOpen(false)}/>
                </motion.div>
            )}
        </AnimatePresence> */}

        {snack && 
            <div className={`snackbar-box ${!snackVisivle ? 'hide' : ''}`}>
                <SnackBar type={snackType}/>
            </div>
        }
    </div>
  )
}

export default BottomBar