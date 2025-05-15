import { useEffect } from 'react'
import Swal from 'sweetalert2'


function AlertBtn1({type}) {

  useEffect(() => {
    const alert1con = {
      loginError: {
        txt: '<p class="custom-text01">아이디 또는 패스워드를 확인해 주세요.</p>'
      },
      signupError: {
        txt: '<p class="custom-text01">필수 입력과 약관 동의를 확인해 주세요.</p>'
      }
    }
  
    if (!type || !alert1con[type]) return

    Swal.fire({
      html: alert1con[type].txt,
      confirmButtonText: '확인',
      customClass: {
        popup: 'custom-popup01',
        confirmButton: 'custom-confirm-button01',
        htmlContainer: 'custom-html-container01',
      }
    })
  }, [type])
  
  return null
}

// 사용방법 : <AlertBtn1 type={'loginError'}/>

export default AlertBtn1