import React, { useState } from 'react'
import LoginForm from '../../component/00-login/LoginForm'
import BtnLong from '../../component/_common/BtnLong'
import AlertBtn1 from '../../component/_common/AlertBtn1'
import '../../styles/00-login/login.scss'

function Login() {
  
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')

  return (
    <div>
      <div className='login-top'>
        <p className='login-logo'>
          <img src="/imgs/logo.svg" alt="" />
        </p>
        <span className='login-slogan'>좋아하는 모든 것을 기록하는 방법</span>
      </div>

      <LoginForm id={'userId'} label={'아이디'} autoComplete={'userid'} value={text1} onChange={e => setText1(e.target.value)}/>
      <LoginForm id={'userPassword'} label={'비밀번호'} type={'password'} autoComplete={'current-password'} value={text2} onChange={e => setText2(e.target.value)}/>

      <BtnLong label={'로그인'} isActive={text2.trim().length > 0} goto={"/"}/>
      {/* <AlertBtn1 type={'loginError'}/> */}
    </div>
  )
}

export default Login