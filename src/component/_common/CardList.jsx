import React from 'react'
import CardItem from './CardItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/free-mode';
import 'swiper/css/grid';

function CardList({ data, rows = 1, slidesPerView = 'auto' }) {

  return (
    <Swiper className='cardlist'
    modules={[Grid]}
    slidesPerView={slidesPerView}
    spaceBetween={10}
    grid={ rows > 1 ? {rows, fill: 'row'} : undefined }
    >
      {
        data.map((item, i) => (
          <SwiperSlide className='carditem' key={i}>
            <CardItem 
              imgurl={item?.p_thumb} name={item?.p_name} price={item?.p_price} id={item?.id}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default CardList