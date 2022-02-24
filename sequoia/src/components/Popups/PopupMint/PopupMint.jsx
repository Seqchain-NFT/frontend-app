import React, {useCallback, useEffect, useMemo, useState} from 'react'

import './PopupMint.scss'

import {ButtonAccent, ButtonEmpty} from '../../UI/Button/Button'

import logoImage from './assets/logo.png'
import {ReactComponent as MinusIcon} from './assets/minus.svg'
import {ReactComponent as PlusIcon} from './assets/plus.svg'
import pendingGif from '../../../assets/pending.gif'

import {PopupContext} from '../../../context/PopupContext'

import useMint, {ESaleStatus} from "../../../hooks/useMint";
import {BigNumber} from "ethers";
import {fromWei} from "web3-utils";

const PopupMint = () => {
    const {maxTokenPurchase, status, price, pending, balance, mint} = useMint()
    const [ showModal, setShowModal ] = useState(false)
    const [ mintCount, setMintCount ] = useState(1)
    const [errorMessage, setErrorMessage] = useState('');

    const [showPopupName, setShowPopupName] = React.useContext(PopupContext)

    useEffect(() => {
        if (showPopupName === 'popup-mint') {
            setShowModal(true)
        } else
        if (showPopupName === '') {
            setShowModal(false)
        }
    }, [showPopupName])

    const onChangeAmountHandler = useCallback ((isAdd) => {
        setMintCount(prevState => {
            let newValue = isAdd ? prevState + 1 : prevState - 1
            return newValue > maxTokenPurchase ? maxTokenPurchase : newValue <= 0 ? 0 : newValue
        })
    }, [maxTokenPurchase])

    const totalPrice = useMemo(() => {
        return price.mul(BigNumber.from(mintCount.toString()))
    }, [price, mintCount])

    const isCanMint = useMemo(() => {
        let errorMess = ''
        if (totalPrice.gt(balance)) {
            errorMess = 'Not enough balance!'
        }
        if (status === ESaleStatus.Enable) {
            errorMess = 'Sale is not start'
        }
        if (mintCount === 0) {
            errorMess = 'Enter valid amount NFT'
        }
        setErrorMessage(errorMess)
        return pending || totalPrice.gt(balance) || status === ESaleStatus.Enable || mintCount === 0
    }, [pending, totalPrice, balance, status, mintCount])

    const onMintHandler = useCallback(() => {
        mint(mintCount)
    }, [mint, mintCount])

    return (
        <div className={showModal ? 'popup show' : 'popup'}>
            <div className="popup-mint">
                <div className="popup-mint__title">
                    <img src={logoImage} alt="" />
                    <h3>seqchain mint</h3>
                    <p>Choose the number NFT to mint</p>
                </div>
                <div className="popup-mint__input">
                    <ButtonEmpty onClick={() => onChangeAmountHandler(false)}><MinusIcon/></ButtonEmpty>
                    <p>{ mintCount }</p>
                    <ButtonEmpty onClick={() => onChangeAmountHandler(true)}><PlusIcon/></ButtonEmpty>
                </div>
                <div className="popup-mint__footer">
                    <p>Total: <span>{ fromWei(totalPrice.toString()) }</span> ETH</p>
                    <ButtonAccent disabled={isCanMint} onClick={onMintHandler}>{pending ? <img src={pendingGif} alt="Pending"/> : "Buy"}</ButtonAccent>
                    {
                        errorMessage !== '' && <p className="error">{errorMessage}</p>
                    }
                </div>
            </div>
            <div onClick={() => setShowPopupName('')} className="popup__blur" />
        </div>
    )
}


export default PopupMint