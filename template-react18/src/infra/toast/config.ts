import { Bounce, type ToastContainerProps } from 'react-toastify';

export const commonToastConfig: ToastContainerProps = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: false,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: 'light',
  transition: Bounce,
};
