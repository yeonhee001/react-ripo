import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable';
import PlusIcon from '../icons/PlusIcon'
import MinusIcon from '../icons/MinusIcon'

function BottomBarExpanded({ isOpen, setIsOpen, data, onAddToCart }) {
    const navi = useNavigate();
    const userId = sessionStorage.getItem('mem_id');
    const [ea, setEa] = useState(1);
    const [price, setPrice] = useState(data?.price);

    const firstImg = data?.p_thumb.split(',')[0];

    const swipeHandlers = useSwipeable({
        onSwipedDown: () => setIsOpen(false),
        // onSwipedUp: () => setIsOpen(true),
        delta: 50,          // 스와이프 거리 기준 (기본값 10)
        trackMouse: true,   // pc 마우스 드래그 허용
        preventDefaultTouchmoveEvent: true,   // 드래그 방지
    });

    // data와 ea 값에 따른 price 변동
    useEffect(()=>{
        if(data?.p_price) {
            setPrice(data?.p_price * ea);
        }
    },[ea, data])

    // 수량 카운터
    function eaCounter(type) {
        if(type === 'plus') {
            setEa(prev => prev + 1);
        } else if(type === 'minus') {
            setEa(prev => (prev > 1 ? prev - 1 : 1));
        }
    }

    // 장바구니
    function getCart() {
        if(!userId) {
            navi('/login');
            return;
        }

        // 중복 확인
        axios.get(`http://localhost/admin/api/cart.php?mem_id=${userId}`)
        .then(res => {
            const cartList = res.data;
            
            const check = cartList.some(item => String(item.p_id) === String(data.id));  // 있으면 true, 없으면 false

            if(check) {
                // 장바구니 중복
                const putData = {
                    mem_id: userId,
                    p_id: data.id,
                    p_price: String(price),
                    p_ea: String(ea),
                }

                // console.log(putData);
                axios.put('http://localhost/admin/api/cart.php', putData)
                .then(() => {onAddToCart('add');})
                .catch(() => {onAddToCart('error');});

            } else {
                // 장바구니 담기
                const cartData = {
                    mem_id: userId,
                    p_id: data.id,
                    p_name: data.p_name,
                    p_price: String(price),
                    p_ea: String(ea),
                    p_thumb: firstImg
                }
                
                // console.log('서버에 저장함!', cartData);
                
                axios.post('http://localhost/admin/api/cart.php', cartData)
                .then(() => {onAddToCart('add');})
                .catch(() => {onAddToCart('error');});
            }
        })
        .catch(err => console.error(err))
    }

    // 구매
    function payNow() {
        if(!userId) {
            navi('/login');
            return;
        }

        const payData = {
            mem_id: userId,
            p_id: data.id,
            p_name: data.p_name,
            p_price: String(price),
            p_ea: String(ea),
            p_thumb: firstImg
        }
        
        navi('/pay', {
            state:  payData
        })
    }

  return (
    <div 
        className={`bottombar-expanded ${isOpen ? 'active' : ''}`}
        {...swipeHandlers}
    >
        <div className='bottombar-drag-handle'/>
        <div className='expanded-content'>
            <div className='expanded-content-top'>
                <div className='select-num'>
                    <MinusIcon className={'select-num-icon'} onClick={() => eaCounter('minus')}/>
                    <span>{ea}</span>
                    <PlusIcon className={'select-num-icon'} onClick={() => eaCounter('plus')}/>
                </div>
                <span>{Number(price).toLocaleString()}</span>
            </div>

            <div className='expanded-content-bottom'>
                <p>구매수량 <span>{ea === 0 ? '_' : ea}</span> 개</p>
                <span>총 {Number(price).toLocaleString()} 원</span>
            </div>
            
            <div className='bottombar-btnbox'>
                <div 
                    className='btnshort-line bottombar'
                    onClick={getCart}
                >
                    <p>장바구니에 담기</p>
                </div>
                <div 
                    className='btnshort-fill bottombar' 
                    onClick={payNow}
                >
                    <p>구매하기</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomBarExpanded