import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import CardItem from '../../component/_common/CardItem';
import SearchBar from '../../component/02-search/SearchBar';
import SearchIconPurple from '../../component/icons/SearchIconPurple';
import InfoMessage from '../../component/_common/InfoMessage';
import TopIcon from '../../component/icons/TopIcon';
import '../../styles/02-search/searchDetail.scss';

function SearchDetail() {
  const navi = useNavigate();
  const { word } = useParams();

  const [tempInput, setTempInput] = useState(''); //검색어 입력중
  const [searchInput, setSearchInput] = useState(''); //검색한 단어 저장
  const [searchResult, setSearchResult] = useState([]); // 검색한 단어에 대한 데이터 저장
  const [ctgrName, setCtgrName] = useState([]); // 각 데이터들의 카테고리명

  // 모든 상품 데이터 가져오기
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_APIURL}/api/p_list.php`)
    .then(res=>{
      setSearchInput(word);
      setTempInput(word);
      const filteredData = res.data.filter((item) => 
        item.p_name.includes(word)
      )
      setSearchResult(filteredData);
    })
  },[word])

  // 모든 카테고리 가져와 홈에 표시되는 데이터의 카테고리 id값과 일치하는 카테고리의 name 가져오기
  useEffect(()=>{
    if (searchResult === null) return;

    axios.get(`${process.env.REACT_APP_APIURL}/api/category.php`)
    .then(res => {
      const matchedCategories = searchResult.map(item => {
        return res.data.find(ctgr => String(ctgr.id) === String(item.cat_id));
      });
      setCtgrName(matchedCategories.map(ctgr => ctgr?.cat_name ?? ''))
    })
    .catch(e => console.error('카테고리 데이터 불러오기 실패', e));
  }, [searchResult]);

  // 아이템의 개수가 홀수일 경우 빈 박스 추가하여 리스트 2줄 유지. 
  const items = [...searchResult];
  if(items.length % 2 !== 0) items.push({ id: 'placeholder', isPlaceholder: true })

  return (
    <div className='search-detail'>
      <div className='search-detail-bar'>
        {/* <BackIcon className={'bar-backicon'} onClick={() => navi(-1)}/> */}
        <SearchBar 
          placeholder={"어떤 상품을 찾아볼까?"} submitbtn={<SearchIconPurple className={'search-btn'}/>}
          value={tempInput} onChange={(e)=>setTempInput(e.target.value)}
          onSubmit={(e)=>{
            e.preventDefault();
            if (!tempInput.trim()) return; // 빈 값 방지
            navi(`/search/searchdetail/${encodeURIComponent(tempInput)}`);
          }}/>
        <span onClick={() => navi('/search')}>취소</span>
      </div>

      {items.length === 0 ? (
        <InfoMessage type={'nosearch'}/>
      ) : (
        <p className='search-detail-msg'>
          <span>{searchResult.length}</span> 개의 {searchInput} 발견!
        </p>
      )}

      <div className='product-list-item-box'>
        {
          items.map((item, i) => (
            item.isPlaceholder ? (
              <div key='placeholder' className='carditem placeholder'></div>
            ) : (
              <div key={item.id} className='carditem'>
                <CardItem
                  imgurl={item.p_thumb}
                  name={item.p_name}
                  price={item.p_price}
                  id={item.id}
                  type={ctgrName[i]}
                />
              </div>
            )
          ))
        }
      </div>

      <TopIcon className={'search-detail-topicon'}/>
    </div>
  )
}

export default SearchDetail