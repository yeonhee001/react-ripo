import React from 'react'
import LoginForm from './LoginForm'

function SignupForm({form, type, value, onChange, maxLength}) {

  const signupform = {
    name: {
      id : 'userName',
      label : <>이름<sup style={{ position: 'relative', top: '-0.4em', fontSize: '0.6em' }}>*</sup></>,
      autoComplete : 'username',
      warn : '필수! 이름을 입력해주세요'
    },
    id: {
      id : 'userId',
      label : <>아이디<sup style={{ position: 'relative', top: '-0.4em', fontSize: '0.6em' }}>*</sup></>,
      autoComplete : 'userid',
      warn : '필수! 아이디는 4-12자 이내로 입력해주세요.',
      minLength: '4',
      maxLength: '12'
    },
    password: {
      id : 'userPassword',
      label : <>비밀번호<sup style={{ position: 'relative', top: '-0.4em', fontSize: '0.6em' }}>*</sup></>,
      autoComplete : 'current-password',
      warn : '필수! 비밀번호는 8-20자 이내로 입력해주세요.',
      minLength: '8',
      maxLength: '20'
    },
    tel: {
      id : 'userTel',
      label : <>전화번호<sup style={{ position: 'relative', top: '-0.4em', fontSize: '0.6em' }}>*</sup></>,
      autoComplete : 'usertel',
      warn : '필수! 01012345678'
    },
    mail: {
      id : 'usermail',
      label : '이메일',
      autoComplete : 'usermail',
      warn : 'ex) ripo2025@gmail.com'
    },
  }

  return (
    <div className='signup-form'>
        <LoginForm id={signupform[form].id} label={signupform[form].label} type={type} autoComplete={signupform[form].autoComplete} value={value} onChange={onChange} minLength={signupform[form].minLength} maxLength={signupform[form].maxLength}/>
        <p>{signupform[form].warn}</p>
    </div>
  )
}

export default SignupForm