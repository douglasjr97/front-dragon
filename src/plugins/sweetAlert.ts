import sweetAlert from 'sweetalert2';

const swal = sweetAlert;

/**
 * @plugin Toast of Sweet Alert 
 */
const Toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1750,
  timerProgressBar: true,
  didOpen: toast => {
    toast.addEventListener('mouseenter', swal.stopTimer);
    toast.addEventListener('mouseleave', swal.resumeTimer);
  },
});

type AlertQuestionParams = {
    text: string;
    title?: string;
    focusCancelButton?: boolean;
    cancelButtonText?: string;
    confirmButtonText?: string;
  };

const question = async ({
    text,
    title = 'Tem certeza?',
    cancelButtonText = 'Cancelar',
    focusCancelButton = true,
    confirmButtonText = 'OK',
  }: AlertQuestionParams): Promise<{ answer: 'yes' | 'no' }> => {
    const result = await sweetAlert.fire({
      icon: 'warning',
      title,
      text,
      showCancelButton: true,
      cancelButtonText,
      cancelButtonColor: '#FF0000',
      focusCancel: focusCancelButton,
      confirmButtonText,
      reverseButtons: true,
    });
  
    return {
      answer: result.value ? 'yes' : 'no',
    };
  };

export default swal;
export { Toast, question };
