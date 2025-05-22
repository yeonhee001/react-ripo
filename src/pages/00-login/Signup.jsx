import axios from 'axios'
import React, { useState } from 'react'
import SignupForm from '../../component/00-login/SignupForm'
import AgreeItem from '../../component/00-login/AgreeItem'
import AgreeCheck from '../../component/_common/AgreeCheck'
import BtnLong from '../../component/_common/BtnLong'
import '../../styles/00-login/signup.scss'
import AlertBtn1 from '../../component/_common/AlertBtn1'
import AgreePopup from '../../component/00-login/AgreePopup'
import { useNavigate } from 'react-router-dom'

function Signup() {

  const navi = useNavigate();
  const [jointext1, setJoinText1] = useState('')
  const [jointext2, setJoinText2] = useState('')
  const [jointext3, setJoinText3] = useState('')
  const [jointext4, setJoinText4] = useState('')
  const [jointext5, setJoinText5] = useState('')
  const [showAlert, setShowAlert] = useState(false);

  const [agreeOption1, setAgreeOption1] = useState(false);
  const [agreeOption2, setAgreeOption2] = useState(false);
  const [agreePopupType, setAgreePopupType] = useState(null);

  // const openPopup = (type)=>{
  //   setAgreePopupType(type);
  // }
  const popupConfirm = ()=>{
    if(agreePopupType==='popup01'){setAgreeOption1(true);} 
    else if(agreePopupType==='popup02'){setAgreeOption2(true);} 
    setAgreePopupType(null); //팝업 닫기
  }

  const signupClick = ()=>{
    setShowAlert(true);
  }
  const alertConfirm = ()=>{
    setShowAlert(false);
    navi('/login');
  }

  function join(e){
    e.preventDefault();


    const formdata = new FormData();
    formdata.append('name',jointext1);
    formdata.append('id',jointext2);
    formdata.append('password',jointext3);
    formdata.append('tel',jointext4);
    formdata.append('email',jointext5);
    axios.post(`${process.env.REACT_APP_APIURL}/api/member.php`,formdata,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
      // 내꺼 닷홈 사이트 http://yeon.dothome.co.kr/admin/api/member.php
  }

  return (
    <>
      <div className='signup-top'>
        <span className='signup-slogan'>좋아하는 모든 것을 기록하는 방법</span>
        <p className='signup-logo'>
          <img src="/imgs/logo.svg" alt="logo" />
        </p>
      </div>

      <form onSubmit={join}>
        <div className='signup'>
          <SignupForm form={'name'} value={jointext1} onChange={e => setJoinText1(e.target.value)}/>
          <SignupForm form={'id'} value={jointext2} onChange={e => setJoinText2(e.target.value)} maxLength={'12'}/>
          <SignupForm form={'password'} type={'password'} value={jointext3} onChange={e => setJoinText3(e.target.value)} maxLength={'20'}/>
          <SignupForm form={'tel'} type={'number'} value={jointext4} onChange={e => setJoinText4(e.target.value)}/>
          <SignupForm form={'mail'} type={'email'} value={jointext5} onChange={e => setJoinText5(e.target.value)}/>
        </div>

        <div className='signup-check'>
          <div className='signup-all-check'>
              <AgreeCheck className={'signup-check'}
              checked={agreeOption1 && agreeOption2}
              onChange={()=>{
                const allValue = !(agreeOption1 && agreeOption2);  // 둘 다 true면 false로 토글
                setAgreeOption1(allValue);
                setAgreeOption2(allValue);
              }}/>
              <p>서비스 이용약관 전체 동의</p>
          </div>
          <div className='signup-each'>
            <AgreeItem type={'option01'} onClick={()=>setAgreePopupType('popup01')} checked={agreeOption1} onChange={() => setAgreeOption1(prev => !prev)}/>
            <AgreeItem type={'option02'} onClick={()=>setAgreePopupType('popup02')} checked={agreeOption2} onChange={() => setAgreeOption2(prev => !prev)}/>
          </div>
        </div>
        {
          agreePopupType && (
            <AgreePopup type={agreePopupType} onConfirm={popupConfirm}/>
          )
        }

        <div className='signup-longbtn'>
          <BtnLong className={'signup-btn'} label={'회원가입'} isActive={jointext1.trim().length>0 && jointext2.trim().length>3 && jointext3.trim().length>7 && jointext4.trim().length>0 && agreeOption1===true} onClick={signupClick} type={'submit'}/>
        </div>
      </form>
      {
        showAlert && 
        <AlertBtn1 type={'signup'} onConfirm={alertConfirm}/>
      }

    </>
  )
}

export default Signup