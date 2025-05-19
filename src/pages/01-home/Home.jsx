import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';
import CardList from '../../component/_common/CardList'
import HomeSlide from '../../component/01-home/HomeSlide'
import CategoryLink from '../../component/01-home/CategoryLink';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/01-home/home.scss'

function Home() {
  const [allItem, setAllItem] = useState([]);
  const [ctgr, setCtgr] = useState([]);
  const [mainSlideItem, setMainSlideItem] = useState(null);

  const testMainSlideData = [
    {
      id: 1,
      imgurl: '/imgs/기록01_다이어리03.jpg',
      product: '썸네일 인덱스잇',
      itemcategory: '메모지' 
    },
    {
      id: 2,
      imgurl: '/imgs/기록01_다이어리03.jpg',
      product: '썸네일 인덱스잇',
      itemcategory: '메모지' 
    },
    {
      id: 3,
      imgurl: '/imgs/기록01_다이어리03.jpg',
      product: '썸네일 인덱스잇',
      itemcategory: '메모지' 
    },
    {
      id: 4,
      imgurl: '/imgs/기록01_다이어리03.jpg',
      product: '썸네일 인덱스잇',
      itemcategory: '메모지' 
    }
  ]

  const category = [
    {
        imgurl: '/imgs/category01.svg',
        name: '다이어리',
        type: 'diary'
    },
    {
        imgurl: '/imgs/category02.svg',
        name: '메모지',
        type: 'memo'
    },
    {
        imgurl: '/imgs/category03.svg',
        name: '스티커',
        type: 'stiker'
    },
    {
        imgurl: '/imgs/category04.svg',
        name: '샤프',
        type: 'sharp'
    },
    {
        imgurl: '/imgs/category05.svg',
        name: '볼펜',
        type: 'pen'
    }
  ]

  useEffect(()=>{
    axios.get('http://localhost/admin/api/p_list.php')
    .then(res=>{
      setAllItem(res.data)
    })
  },[])

  useEffect(()=>{
    axios.get('http://localhost/admin/api/category.php')
    .then(res=>{
      setCtgr(res.data)
    })
  },[])

  console.log(ctgr);
  

  // 메인슬라이드 로컬스토리지 저장, 하루시간 설정 후 삭제되게 함
  useEffect(()=>{
    if (allItem && allItem.length > 0) {
      const saveItem = localStorage.getItem('ripo-main'); //-> 문자열(쿠키는 원래 문자열만 저장 가능)
      const now = new Date().getTime(); //현재 시간
      const oneDay = 24 * 60 * 60 * 1000; //24시간=86400000ms
      
      if (saveItem) {
        try {
          const parsedItem = JSON.parse(saveItem); //저장된 값이 있으면 문자열을 객체로 변경
          const { main, createdAt } = parsedItem; // createdAt 저장 시간이 지났는지 확인하는 용
          
          const isValidTime = createdAt && now - createdAt < oneDay; // 저장시간이 24시간 이내인지 확인 (현재시간-저장시간)
          
          if (isValidTime) {
            // ⏳ 아직 하루 안 지났음 → 유효
            setMainSlideItem(main); // 랜덤으로 하나 뽑아서 저장
            return;
          } else {
            // 하루 지남 → 제거
            localStorage.removeItem('ripo-main');
          }
        } catch (e) {
          console.error("로컬스토리지 파싱 오류", e);
          localStorage.removeItem('ripo-main');
        }
      }
      // 여기로 오면 유효한 로컬스토리지 없고 새로 랜덤 생성
        const copyHomeData = [...allItem].sort(() => Math.random() - 0.5); // 배열을 랜덤하게 섞기 위해 sort함수에 넣어서 사용, 0-1사이 값을 주는데 -0.5를 하면 음수(앞으로) 양수(뒤로)값을 가지게 되어 순서가 바뀐다
        const sliceHome = copyHomeData.slice(0, 4);
        setMainSlideItem(sliceHome); // 랜덤으로 고른걸 메인슬라이드 이미지로 선택
        const createdAt = new Date().getTime(); //현재 시각ms
        localStorage.setItem('ripo-main', JSON.stringify({main: sliceHome, createdAt})); // sliceFood, mainFoodPick은 배열이니까 쿠키에 직접 저장이 되지 않아 문자열로 변경하여 저장
        console.log(sliceHome);
    }

  }, [allItem]);

  const newItem01 = allItem?.slice(-4);
  const newItem02 = allItem?.slice(-8, -4);
  
  return (
    <div className='home'>
      <Swiper className='mainSlide'
      modules={[Autoplay, Pagination]}
      slidesPerView={'auto'}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      spaceBetween={0}
      loop={true}
      >
        {
          
          mainSlideItem?.map((item, i) => (
            <SwiperSlide key={i}>
              <HomeSlide
                imgurl={item?.p_thumb} name={item?.p_name} category={item?.itemcategory} id={item?.id}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <Swiper className='categorySlide'
      slidesPerView={'auto'}
      spaceBetween={16}
      >
        {
          category.map((item, i) => (
            <SwiperSlide key={i}>
              <CategoryLink data={item}/>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className='home-item-box'>
        <p className='home-item-box-title'>🆕 새로 나왔어요!</p>
        <CardList data={[...newItem01, ...newItem02]} rows={2} slidesPerView={2.6}/>
      </div>

      <div className='footer'>
        (주)Ripo <br/>
        대표이사 : 차민규 / 서울시 강남구 테헤란로 000 <br/>
        사업자등록번호 : 211-87-01005 / 통신판매업 신고번호 2025-1005-1005 <br/>
        고객센터 5001-1005
        <span>
          (주)Ripo는 통신판매중개자로서 통신판매의 당사자가 아니며
          상품 거래정보 및 거래 등에 대한 책임을 지지 않습니다.
        </span>

        이용약관 | 개인정보처리방침
      </div>
    </div>
  )
}

export default Home