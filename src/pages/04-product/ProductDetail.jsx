import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from "framer-motion";
import TabMenu from '../../component/04-product/TabMenu'
import ProductSlide from '../../component/04-product/ProductSlide';
import InfoMessage from '../../component/_common/InfoMessage';
import BtnShort from '../../component/_common/BtnShort';
import BoxIcon from '../../component/icons/BoxIcon';
import TopIcon from '../../component/icons/TopIcon';
import BottomBar from '../../component/04-product/BottomBar';
import SnackBar from '../../component/04-product/SnackBar';
import '../../styles/04-product/productDetail.scss';


function ProductDetail() {
  const { type, id } = useParams();
  
  const [selectedTab, setSelectedTab] = useState(0);
  const [productData, setProductData] = useState(null);
  const [categoryItemId, setCategoryItemId] = useState(null);
  const [categorySub, setCategorySub] = useState(null);
  const [categoryMain, setCategoryMain] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // 모든 데이터 중 파라미터 id값과 일치하는 id값의 상품 데이터 가져오기.
  useEffect(()=>{
    axios.get('http://localhost/admin/api/p_list.php')
    .then(res=>{
      // console.log(res.data);
      const matchedItem = res.data.find(product => String(product.id) === String(id));
      setProductData(matchedItem);
      setCategoryItemId(matchedItem.cat_id);
    })
  },[])

  // 카테고리(대, 중) name 가져오기.
  useEffect(()=>{
    axios.get('http://localhost/admin/api/category.php')
    .then(res=>{
      if (!categoryItemId || categoryItemId === 'null') return;

      const matchedItem = res.data.find(item => String(item.id) === String(categoryItemId));
      if (!matchedItem) return;
      
      const matchedSub = res.data.find(item => String(item.id) === String(matchedItem.cat_parent));
      setCategorySub(matchedSub);
      if (!matchedSub) return;

      const matchedMain = res.data.find(item => String(item.id) === String(matchedSub.cat_parent));
      setCategoryMain(matchedMain);
    })
  },[categoryItemId])
  
  const imgArr = productData?.p_thumb.split(',');

  return (
    <div className='productdetail'>
      <div className='productdetail-info'>
        <Swiper className='productSlide'
          modules={[Autoplay, Pagination]}
          slidesPerView={'auto'}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={0}
          loop={(imgArr?.length ?? 0) > 2}
        >
          {
            imgArr?.map((item, i) => (
              <SwiperSlide key={i}>
                <ProductSlide imgurl={item} />
              </SwiperSlide>
            ))
          }
        </Swiper>

        <div className='productdetail-info-txt'>
          <span className='productdetail-info-txt-category'>
            {`${categoryMain?.cat_name} > ${categorySub?.cat_name} > ${type}`}
          </span>
          <p>{productData?.p_name}</p>
          <span className='productdetail-info-txt-price'>
            <span>{Number(productData?.p_price).toLocaleString()}</span> 원
          </span>
        </div>

        <hr />

        <div className='productdetail-info-delivery'>
          <BoxIcon className={'productdetail-boxicon'}/>
          <span>배송비 2,500원</span>
        </div>
      </div>

      <hr className='productdetail-info-middleline'/>

      <TabMenu type='product' onTabChange={setSelectedTab}/>
      
      <div className='productdetail-detail-info'>
        {selectedTab === 0 ? (
          <div dangerouslySetInnerHTML={{ __html: productData?.p_content }} />
        ) : (
          <div>
            <InfoMessage type={'detailfaq'}/>
            <BtnShort 
              className={'detailfaq-btn'}
              lineType={'quest'}
              fillType={'quest'}
              lineTo={'/my/faq'}
              fillTo={'/my'}/>
          </div>
        )}
      </div>

      <TopIcon className={'productdetail-topicon'}/>

      {/* <SnackBar/> */}

      {isOpen && <div className='bottombar-overlay' onClick={()=>setIsOpen(false)}/>}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
            initial={{ opacity: 0, transform: 'translate(-50%, 100%)' }} // 아래에서 시작
            animate={{ opacity: 1, transform: 'translate(-50%, 0%)' }} // 위로 올라오면서 나타남
            exit={{ opacity: 0, transform: 'translate(-50%, 100%)' }} // 사라질 땐 다시 아래로
            transition={{ duration: 0.3 }}
            className={'productdetail-bottombar-motion'}
            >
              <BottomBar 
                isOpen={isOpen} setIsOpen={setIsOpen}
                onClose={()=>setIsOpen(false)}/>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  )
}

export default ProductDetail