import './Toast.scss'

import { toast } from 'react-toastify';

import { ReactComponent as SuccessIcon } from './assets/check.svg'

const CloseButton = ({ closeToast }) => (
    <div onClick={closeToast} className="toast-close">
        Close
    </div>
  );

const SuccessMessage = ({ closeToast, toastProps }) => (
    <div>
        <p className='toast-message'>Success!</p>
        <p className='toast-subtitle'>Mint 3 NFT Success</p>
    </div>
)

const toastSuccess = () => toast.success(<SuccessMessage/>, {
    icon: ({theme, type}) => <div className="toast-icon"><SuccessIcon/></div> ,
    className: 'toast-success-wrapper',
    progressClassName: 'toast-success-progress-bar'
})

export { CloseButton, toastSuccess }