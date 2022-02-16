import { useState } from 'react'
import './PopupMint.scss'
import { ButtonEmpty, ButtonAccent } from '../../UI/Button/Button'
import logoImage from './assets/logo.png'
import { ReactComponent as MinusIcon } from './assets/minus.svg'
import { ReactComponent as PlusIcon } from './assets/plus.svg'


const PopupMint = (props) => {
    const MAXT_TO_MINT = 3

    const [ showModal, setShowModal ] = useState(true)
    const [ mintCount, setMintCount ] = useState(1)

    
    function closePopup() {
        props.scroll(false)
        setShowModal(false)
    }

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
                    <p>Total: <span>{ mintCount }</span> BNB</p>
                    <ButtonAccent>Buy</ButtonAccent>
                </div>
            </div>
            <div onClick={closePopup} className="popup__blur"></div>
        </div>
    )
}


export default PopupMint