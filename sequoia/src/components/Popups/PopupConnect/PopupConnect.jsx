import React, {useState, useEffect, useCallback} from 'react'
import './PopupConnect.scss'

import { PopupContext } from '../../../context/PopupContext'
import {wallets} from "../../../config/walets";
import useAuth from "../../../hooks/useAuth";

const PopupConnect = () => {
    const [showModal, setShowModal] = useState(false)
    const {login} = useAuth()
    const [showPopupName, setShowPopupName] = React.useContext(PopupContext)

    useEffect(() => {
        if (showPopupName === 'popup-connect') {
            setShowModal(true)
        } else
        if (showPopupName === '') {
            setShowModal(false)
        }
    }, [showPopupName])

    const onLogin = useCallback( async (connectorId) => {
        await login(connectorId)
        setShowPopupName('') 
    }, [login])

    return (
        <div className={showModal ? 'popup show' : 'popup'}>
            <div className="popup-connect">
                <h3>Connect wallet</h3>
                <div className="popup-connect__wallets-list">
                    {
                        wallets.map((wallet, index) => {
                            return (
                                <div key={index} onClick={() => onLogin(wallet.connectorId)} className="popup-connect__wallet">
                                    {wallet.icon}
                                    <p>{wallet.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div onClick={() => setShowPopupName('')} className="popup__blur"/>
        </div>
    )
}

export default PopupConnect