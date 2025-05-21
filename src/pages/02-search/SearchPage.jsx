import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../component/02-search/SearchBar';
import SearchKeyword from '../../component/02-search/SearchKeyword';
import SearchIconPurple from '../../component/icons/SearchIconPurple';
import '../../styles/02-search/searchPage.scss';

function SearchPage() {
  const [searchInput, setSearchInput] = useState('');
  const navi = useNavigate();

  const wordClick = (word)=>{
    navi(`/search/searchdetail/${encodeURIComponent(word)}`) //encodeURIComponent(word)는 띄어쓰기나 특수문자가 있을 경우 대비하여 인코딩해줌
  }

  const keyword = ['디즈니', '펜', '키링', '그로밋', '피클스', '다이어리'];

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
        <h2 className='search-title'>추천 키워드</h2>
        <div>
          {
            keyword.map((item, i) =>
              <SearchKeyword key={i} word={item} onClick={()=>wordClick(item)}/>
            )
          }
        </div>
      </div>
      <div className='search-img'><img src="/imgs/search.svg" alt="search" /></div>
    </div>
  )
}

export default SearchPage