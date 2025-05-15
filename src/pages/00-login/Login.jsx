import React, { useState } from 'react'
import BtnLong from '../../component/_common/BtnLong'
import AlertBtn1 from '../../component/_common/AlertBtn1'

function Login() {
  const [text, setText] = useState('')
  return (
    <div>
      <AlertBtn1 type={'loginError'}/>
      <textarea 
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <BtnLong label={'로그인'} isActive={text.trim().length > 0} goto={"/"}/>
    </div>
  )
}

export default Login