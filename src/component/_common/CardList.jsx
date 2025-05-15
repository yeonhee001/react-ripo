import React from 'react'
import CardItem from './CardItem'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/free-mode';

function CardList({ data }) {

  return (
    <Swiper className='cardlist'
    slidesPerView={'auto'}
    spaceBetween={10}
    loop={true}
    >
      {
        data.map((item, i) => (
          <SwiperSlide className='carditem' key={i}>
            <CardItem 
              imgurl={item.imgurl} name={item.product} price={item.price} id={item.id}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default CardList