import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../../component/02-search/SearchBar';
import SearchKeyword from '../../component/02-search/SearchKeyword';
import SearchIconPurple from '../../component/icons/SearchIconPurple';
import CardList from '../../component/_common/CardList';
import '../../styles/02-search/searchPage.scss';

function SearchPage() {
  const [searchInput, setSearchInput] = useState('');
  const [recents, setRecents] = useState([]);
  const [ctgrName, setCtgrName] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const navi = useNavigate();
  const location = useLocation();

  const wordClick = (word)=>{
    navi(`/search/searchdetail/${encodeURIComponent(word)}`) //encodeURIComponent(word)는 띄어쓰기나 특수문자가 있을 경우 대비하여 인코딩해줌
  }

  const keyword = ['디즈니', '펜', '키링', '그로밋', '피클스', '다이어리', '메모지'];

  // 최근 본 상품 가져오기. 경로 바뀔 때마다 실행(항상 렌더링 되게)
  useEffect(()=>{
    const storgeItem = localStorage.getItem('recentProducts');
    if (!storgeItem) {
      setRecents([]);
      setCtgrName([]);
      setIsReady(true);
      return;
    }

    let parsed;
    try {
      parsed = JSON.parse(storgeItem);
    } catch (e) {
      console.error('JSON parse error:', e);
      parsed = [];
    }

    setRecents(parsed);

    // 모든 카테고리 가져와 최근 본 상품 데이터의 카테고리 id값과 일치하는 카테고리의 name 가져오기
    axios.get(`${process.env.REACT_APP_APIURL}/category.php`)
    .then(res => {
      const matchedCategories = parsed.map(item => {
        const match = res.data.find(ctgr => String(ctgr.id) === String(item.cat_id));
        return match?.cat_name || '';
      });
      setCtgrName(matchedCategories)
      setIsReady(true);
    })
    .catch(e => {
      console.error('카테고리 데이터 불러오기 실패', e);
      setCtgrName([]);
      setIsReady(true);
    });
}, [location.pathname]);


  return (
    <div className='search-page'>
      <div>
        <SearchBar
          placeholder={"어떤 상품을 찾아볼까?"} submitbtn={<SearchIconPurple className={'search-btn'}/>}
          value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}
          onSubmit={(e)=>{
            e.preventDefault();
            if (searchInput.trim()) {
              wordClick(searchInput);
            }
          }}/>
        <div>
          <h2 className='search-title'>추천 키워드</h2>
          <div>
            {
              keyword.map((item, i) =>
                <SearchKeyword key={i} word={item} onClick={()=>wordClick(item)}/>
              )
            }
          </div>
        </div>
        {isReady && recents.length > 0 ? (
          <div className='search-recent'>
            <h2 className='search-title'>최근 본 상품</h2>
            <div>
              <CardList data={recents} type={ctgrName} slidesPerView={4.5}/>
            </div>
          </div>
        ) : null}
      </div>
      <div className='search-img'><img src="/imgs/search.svg" alt="search" /></div>
    </div>
  )
}

export default SearchPage