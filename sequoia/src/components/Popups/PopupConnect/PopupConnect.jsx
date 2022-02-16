import React, { useState, useEffect } from 'react'
import './PopupConnect.scss'

import { ReactComponent as MetamaskIcon } from './assets/metamask.svg'
import { ReactComponent as BinanceIcon } from './assets/binance.svg'
import { ReactComponent as MathIcon } from './assets/math.svg'
import { ReactComponent as WalletIcon } from './assets/wallet.svg'


import { PopupContext } from '../../../context/PopupContext'
import { Web3Context } from '../../../context/Web3Context'

const PopupConnect = (props) => {
    const [showModal, setShowModal] = useState(false)
    const [showPopupName, setShowPopupName] = React.useContext(PopupContext)
    const [isAuthorised, setIsAuthorised] = React.useContext(Web3Context)

    useEffect(() => {
        console.log(showPopupName)
        if (showPopupName === 'popup-connect') {
            setShowModal(true)
        } else
        if (showPopupName === '') {
            setShowModal(false)
        }
    }, [showPopupName])

    return (
        <div className={showModal ? 'popup show' : 'popup'}>
            <div className="popup-connect">
                <h3>Connect wallet</h3>
                <div className="popup-connect__wallets-list">
                    <div onClick={() => {setIsAuthorised(true); setShowPopupName('')}} className="popup-connect__wallet">
                        <MetamaskIcon/>
                        <p>Metamask</p>
                    </div>
                    <div onClick={() => {setIsAuthorised(true); setShowPopupName('')}} className="popup-connect__wallet">
                        <BinanceIcon/>
                        <p>WalletConnect</p>
                    </div>
                    <div onClick={() => {setIsAuthorised(true); setShowPopupName('')}} className="popup-connect__wallet">
                        <MathIcon/>
                        <p>Binance Chain Wallet</p>
                    </div>
                    <div onClick={() => {setIsAuthorised(true); setShowPopupName('')}} className="popup-connect__wallet">
                        <WalletIcon/>
                        <p>Math Wallet</p>
                    </div>
                </div>
            </div>
            <div onClick={() => setShowPopupName('')} className="popup__blur"></div>
        </div>
    )
}

export default PopupConnect