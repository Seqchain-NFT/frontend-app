import './Popups.scss'

import PopupConnect from './PopupConnect/PopupConnect'
import PopupMint from './PopupMint/PopupMint'
import Preloader from "../Preloader/Preloader";

const Popups = () => {
    return (
        <>
            <PopupConnect/>
            <PopupMint/>
            <Preloader/>
        </>
    )
}

export default Popups