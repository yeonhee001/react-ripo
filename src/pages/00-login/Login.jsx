import axios from 'axios'
import React, { useState, useEffect } from 'react'
import LoginForm from '../../component/00-login/LoginForm'
import BtnLong from '../../component/_common/BtnLong'
import AlertBtn1 from '../../component/_common/AlertBtn1'
import '../../styles/00-login/login.scss'
import { useNavigate } from 'react-router-dom'

function Login() {
  
  const navi = useNavigate();
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [loginError, setLoginError] = useState(false);

  const signupBtn = (to)=>{
    if(to) navi(to);
  }
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  function showLoginError() {
    setLoginError(true);
    setTimeout(() => setLoginError(false), 100);  // 잠깐 후 false로 리셋
  } // 두번째 아이디 비번 틀렸을 때 팝업창이 안떠서 생성

  function login(e){
    e.preventDefault();

    const formdata = new FormData();
    formdata.append('id',text1);
    formdata.append('pw',text2);

    axios.post(`${process.env.REACT_APP_APIURL}/api/login.php`,formdata,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,  // 쿠키 포함 요청
    })
    .then(res=>{
      // console.log(res.data);
      if (res.data.success) {
        setLoginError(false);
        navi("/");  // 홈으로 이동
        sessionStorage.setItem('mem_id', res.data.mem_id);
      } else {
        showLoginError();
      }
    })
    .catch(err => {
      showLoginError();
      console.error("로그인 에러:", err);
    });
  }

  return (
    <div>
      <form onSubmit={login}>
        <div className='login-top'>
          <p className='login-logo'>
            <img src="/imgs/logo.svg" alt="logo" />
          </p>
          <span className='login-slogan'>좋아하는 모든 것을 기록하는 방법</span>
        </div>

        <div className='login-input'>
          <LoginForm id={'userId'} label={'아이디'} autoComplete={'userid'} value={text1} onChange={e => setText1(e.target.value)}/>
          <LoginForm id={'userPassword'} label={'비밀번호'} type={'password'} autoComplete={'current-password'} value={text2} onChange={e => setText2(e.target.value)}/>
        </div>

        <BtnLong className={'login-btn'} label={'로그인'} isActive={text1.trim().length && text2.trim().length > 0} type={'submit'}/>
        {loginError && <AlertBtn1 type={'loginError'}/>}
      </form>

      <div className='login-signup' onClick={()=>signupBtn('/signup')}>
        <p>아직 회원이 아니신가요? | </p>
        <span>회원가입</span>
      </div>
    </div>
  )
}

export default Login
