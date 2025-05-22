import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';
import TabMenu from '../../component/04-product/TabMenu'
import ProductSlide from '../../component/04-product/ProductSlide';
import InfoMessage from '../../component/_common/InfoMessage';
import BtnShort from '../../component/_common/BtnShort';
import BoxIcon from '../../component/icons/BoxIcon';
import TopIcon from '../../component/icons/TopIcon';
import BottomBar from '../../component/04-product/BottomBar';
import DetailContent from '../../component/04-product/DetailContent';
import DataLoading from '../../component/_common/DataLoading';
import '../../styles/04-product/productDetail.scss';

function ProductDetail() {
  const { type, id } = useParams();
  
  const [loading, setLoading] = useState(true); // 데이터 로딩
  const [selectedTab, setSelectedTab] = useState(0);
  const [productData, setProductData] = useState(undefined);  // 로딩중일 때는 undefined, 없으면 null
  const [categoryItem, setCategoryItem] = useState(null);
  const [categorySub, setCategorySub] = useState(null);
  const [categoryMain, setCategoryMain] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // 모든 데이터 중 파라미터 id값과 일치하는 id값의 상품 데이터 가져오기.
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_APIURL}/api/p_list.php`)
    .then(res=>{
      if(!res.data){setProductData(null)}
      const matchedProduct = res.data.find(product => String(product.id) === String(id));
      if(!matchedProduct) {
        setProductData(null)
        setNotFound(true)
        return;
      }

      // 카테고리명 가져오기
      axios.get(`${process.env.REACT_APP_APIURL}/api/category.php`)
      .then(catRes=>{
        if (!matchedProduct || matchedProduct === 'null') return;
        
        const matchedItem = catRes.data.find(item => String(item.id) === String(matchedProduct.cat_id));

        if (!matchedItem) return;

        if (type !== 'all') {
          if (matchedItem.cat_name !== type) {
            setProductData(null);
            setNotFound(true);
            return;
          }
        }
        
        // 일치할 경우 상태 업데이트
        setCategoryItem(matchedItem);
        setProductData(matchedProduct);
        
        const matchedSub = catRes.data.find(item => String(item.id) === String(matchedItem.cat_parent));
        setCategorySub(matchedSub);
        if (!matchedSub) return;
        
        const matchedMain = catRes.data.find(item => String(item.id) === String(matchedSub.cat_parent));
        setCategoryMain(matchedMain);
      })
    })
  },[type, id])

  // 최근 본 상품 저장 (로컬스토리지)
  useEffect(()=>{
    if(!productData) return;

    const viewed = JSON.parse(localStorage.getItem('recentProducts')) || [];
    
    // 같은 id 상품이 이미 있으면 삭제 (중복 방지)
    const filtered = viewed.filter(item => item.id !== productData.id);

    // 가장 최근 본 상품이 앞으로 오도록
    const updated = [productData, ...filtered];

    // 최근 본 상품은 최대 8개까지만 저장
    localStorage.setItem('recentProducts', JSON.stringify(updated.slice(0, 8)));
  },[productData])
  
  // 이미지 배열
  const imgArr = productData?.p_thumb.split(',');

  // 로딩 처리
  useEffect(()=>{
    if (productData === undefined) return; // 데이터 아직 안 들어온 초기 상태는 무시

    if(productData === null){
      setLoading(false);
      setNotFound(true);
    } else {
      const timer = setTimeout(()=>{
        setLoading(false);
      },300);
      return ()=>clearTimeout(timer);
    }
  },[productData]);

  if(loading){
    return(
      <DataLoading/>
    )
  }
  
  return (
    <div className='productdetail'>
      {!notFound ? (
        <>
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
                {`${categoryMain?.cat_name} > ${categorySub?.cat_name} > ${categoryItem?.cat_name}`}
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
            {selectedTab === 0  ? (
              <DetailContent sanitizedHTML={productData?.p_content}/>
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
          <BottomBar isOpen={isOpen} setIsOpen={setIsOpen} data={productData}/>
      </>
      ) : (
        <InfoMessage type={'noproduct'}/>
      )}
    </div>
  )
}

export default ProductDetail