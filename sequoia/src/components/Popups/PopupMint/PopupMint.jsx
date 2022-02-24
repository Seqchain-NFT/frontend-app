import React, { useState, useEffect } from 'react'

import './PopupMint.scss'

import { ButtonEmpty, ButtonAccent } from '../../UI/Button/Button'

import logoImage from './assets/logo.png'
import { ReactComponent as MinusIcon } from './assets/minus.svg'
import { ReactComponent as PlusIcon } from './assets/plus.svg'

import { PopupContext } from '../../../context/PopupContext'

import { toastSuccess } from '../../UI/Toast/Toast'

import Loader from '../../UI/Loader/Loader'

const ButtonLoading = () => {
    return (
        <ButtonAccent onClick={toastSuccess}><Loader name={'buttonLoader'} style={{width: '2rem', height: '2rem', transform: 'scale(5)'}}/></ButtonAccent>
    )
}

const ButtonBuy = () => {
    return (
        <ButtonAccent onClick={toastSuccess}>Buy</ButtonAccent>
    )
}

const PopupMint = (props) => {
    const MAXT_TO_MINT = 3

    const [ showModal, setShowModal ] = useState(false)
    const [ mintCount, setMintCount ] = useState(1)

    const [showPopupName, setShowPopupName] = React.useContext(PopupContext)

 

    useEffect(() => {
        if (showPopupName === 'popup-mint') {
            setShowModal(true)
        } else
        if (showPopupName === '') {
            setShowModal(false)
        }
    }, [showPopupName])


    function updateMintCount(count) {
        const newCount = mintCount + count
        if (newCount >= 1 && newCount <= MAXT_TO_MINT) {
            setMintCount(newCount)
        }
    }


    return (
        <div className={showModal ? 'popup show' : 'popup'}>
            <div className="popup-mint">
                <div className="popup-mint__title">
                    <img src={logoImage} alt="" />
                    <h3>seqchain mint</h3>
                    <p>Choose the number NFT to mint</p>
                </div>
                <div className="popup-mint__input">
                    <ButtonEmpty onClick={() => updateMintCount(-1)}><MinusIcon/></ButtonEmpty>
                    <p>{ mintCount }</p>
                    <ButtonEmpty onClick={() => updateMintCount(1)}><PlusIcon/></ButtonEmpty>
                </div>
                <div className="popup-mint__footer">
                    <p>Total: <span>{ mintCount }</span> ETH</p>
                    <ButtonBuy/>
                    {/* <ButtonLoading/> */}
                </div>
            </div>
            <div onClick={() => setShowPopupName('')} className="popup__blur"></div>
        </div>
    )
}


export default PopupMint