import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import CardItem from '../../component/_common/CardItem';
import InfoMessage from '../../component/_common/InfoMessage';
import TopIcon from '../../component/icons/TopIcon';
import DataLoading from '../../component/_common/DataLoading';
import '../../styles/04-product/productList.scss'

function ProductList() {
  const { type } = useParams();
  const [listItem, setListItem] = useState([]);
  const [ctgrItem, setCtgrItem] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true); // 데이터 로딩

  // 모든 카테고리 가져와 파라미터와 일치하는 카테고리의 id값 가져오기
  useEffect(()=>{
    window.scrollTo(0,0);
    
    if (!type) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    setLoading(true);
    axios.get(`${process.env.REACT_APP_APIURL}/api/category.php`)
    .then(res => {
      if(type === 'all'){
        setCtgrItem('전체보기');
        return;
      }

      // 유효한 카테고리인지 확인
      const matchedCategories = res.data.find(ctgr => String(ctgr.cat_name) === String(type));
      if(!matchedCategories) {
        setNotFound(true);
      } else{
        setCtgrItem(matchedCategories)
      }
    })
    .catch(e => console.error('카테고리 데이터 불러오기 실패', e))
    .finally(()=>{
      setLoading(false);
    });
  }, [type]);

  // 파라미터로 구한 카테고리 id값과 상품 데이터 내 카테고리 id값과 일치하는 데이터만 가져오기
  useEffect(()=>{
    if (!ctgrItem) return;

    axios.get(`${process.env.REACT_APP_APIURL}/api/p_list.php`)
    .then(res => {
      if(type === 'all'){
        setListItem(res.data);
      } else {
        const matchedCategories = res.data.filter(product => String(product.cat_id) === String(ctgrItem.id));
        setListItem(matchedCategories);
      }
    })
    .catch(e => console.error('카테고리 데이터 불러오기 실패', e));
}, [ctgrItem, type]);

  // 아이템의 개수가 홀수일 경우 빈 박스 추가하여 리스트 2줄 유지. 
  const items = [...listItem];
  if(items.length % 2 !== 0) items.push({ id: 'placeholder', isPlaceholder: true })

  if(loading){
    return(
      <DataLoading/>
    )
  }

  return (
    <div className='product-list'>
      {/* 데이터가 있을 경우 */}
      {(!notFound && listItem.length > 0) ? (
        <>
          {/* 페이지 상단 타이틀 */}
          <h2 className='all-menu-title'>
            {ctgrItem.cat_name ? ctgrItem.cat_name : ctgrItem}
          </h2>
          
          {/* 총 상품 개수 */}
          <p className='product-list-num'><span>{listItem.length}</span>개</p>

          {/* 상품 리스트 */}
          <div className='product-list-item-box'>
            {items.map(product => 
              product.isPlaceholder ? (
                // 홀수 맞춤용 빈 박스
                <div key='placeholder' className='carditem placeholder'></div>
              ) : (
                // 상품 (카드 형태)
                <div key={product.id} className='carditem'>
                  <CardItem
                    imgurl={product.p_thumb}   // 썸네일 이미지
                    name={product.p_name}      // 상품명
                    price={product.p_price}    // 가격
                    id={product.id}            // 상품 id
                    type={type}                // 현재 카테고리명
                  />
                </div>
              )
            )}
          </div>
        </>
      ) : (
        // 카테고리 or 데이터가 없을 경우 안내 메시지
        <InfoMessage type={'noproduct'} />
      )}

      {/* 탑버튼 */}
      <TopIcon className={'search-detail-topicon'}/>
    </div>
  )
}

export default ProductList
