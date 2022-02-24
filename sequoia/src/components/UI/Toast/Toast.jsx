import './Toast.scss'

import { toast } from 'react-toastify';

import { ReactComponent as SuccessIcon } from './assets/check.svg'
import { ReactComponent as ErrorIcon } from './assets/eror.svg'

const CloseButton = ({ closeToast }) => (
    <div onClick={closeToast} className="toast-close">
        Close
    </div>
  );

const ToastMessage = ({ title, text }) => (
    <div>
        <p className='toast-message'>{title}</p>
        <p className='toast-subtitle'>{text}</p>
    </div>
)

const onToast = (message, status) => toast[status](message, {
    icon: () => <div className="toast-icon">{status === 'success' ? <SuccessIcon/> : <ErrorIcon/>}</div> ,
    className: `toast-${status}-wrapper`,
    bodyClassName: `toast-${status}-body`,
    progressClassName: `toast-${status}-progress-bar`
})

export { CloseButton, onToast, ToastMessage }