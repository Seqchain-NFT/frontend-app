import { useState } from 'react'
import './PopupConnect.scss'

import { ReactComponent as MetamaskIcon } from './assets/metamask.svg'
import { ReactComponent as BinanceIcon } from './assets/binance.svg'
import { ReactComponent as MathIcon } from './assets/math.svg'
import { ReactComponent as WalletIcon } from './assets/wallet.svg'


const PopupConnect = (props) => {
    const [showModal, setShowModal] = useState(false)

    function closePopup() {
        props.scroll(false)
        setShowModal(false)
    }

    return (
        <div className={showModal ? 'popup show' : 'popup'}>
            <div className="popup-connect">
                <h3>Connect wallet</h3>
                <div className="popup-connect__wallets-list">
                    <div className="popup-connect__wallet">
                        <MetamaskIcon/>
                        <p>Metamask</p>
                    </div>
                    <div className="popup-connect__wallet">
                        <BinanceIcon/>
                        <p>WalletConnect</p>
                    </div>
                    <div className="popup-connect__wallet">
                        <MathIcon/>
                        <p>Binance Chain Wallet</p>
                    </div>
                    <div className="popup-connect__wallet">
                        <WalletIcon/>
                        <p>Math Wallet</p>
                    </div>
                </div>
            </div>
            <div onClick={closePopup} className="popup__blur"></div>
        </div>
    )
}

export default PopupConnect