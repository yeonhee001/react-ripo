import { useEffect } from 'react'
import Swal from 'sweetalert2'


function AlertBtn2({type, onConfirm, onCancel}) {

  useEffect(() => {
    const alert2con = {
      logoutError: {
        txt: '<p class="custom-text01">로그아웃 하시겠습니까?</p>'
      },
      cartError: {
        txt: '<p class="custom-text01">장바구니에서 삭제하시겠습니까?</p>'
      }
    }
  
    if (!type || !alert2con[type]) return

    Swal.fire({
      html: alert2con[type].txt,
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
      customClass: {
        popup: 'custom-popup02',
        confirmButton: 'custom-confirm-button02',
        cancelButton: 'custom-cencel-button02',
        htmlContainer: 'custom-html-container02',
      },
      willOpen: () => {
        document.body.style.paddingRight = '18px'; // 레이아웃 흔들림 방지
      }
    }).then((result)=>{
      if(result.isConfirmed){
        onConfirm?.();
      } else if (result.isDismissed){
        onCancel?.();
      }
    });
  }, [type, onConfirm, onCancel])
  
  return null
}

// 사용방법 : <AlertBtn2 type={'logoutError'}/>

export default AlertBtn2