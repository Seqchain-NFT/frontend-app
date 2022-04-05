import './Preloader.scss'

import Loader from '../UI/Loader/Loader'
import {useCallback, useContext, useEffect, useRef, useState} from 'react'
import {PopupContext} from '../../context/PopupContext'

const Preloader = () => {
    const preloaderRef = useRef()
    const [showPreloader, setShowPreloader] = useState(false);
    const [showPopupName, setShowPopupName] = useContext(PopupContext) // чтобы отключить скролл

    const removePreloader = useCallback(() => {
        console.log('remove')
        const delay = 1500
        const duration = 500
        if (preloaderRef.current) {
            setTimeout(() => {
                setTimeout(() => {
                    setShowPopupName('')
                }, duration)
            }, delay)
        }
    }, [setShowPopupName])

    useEffect(() => {
        if (showPopupName === 'popup-preloader') {
            setShowPreloader(true)
            removePreloader()
        } else if (showPopupName === '') {
            setShowPreloader(false)
        }
        if (preloaderRef.current !== null) {
            window.addEventListener('DOMContentLoaded', removePreloader)
            return () => window.removeEventListener('DOMContentLoaded', removePreloader)
        }
    }, [removePreloader, setShowPopupName, showPopupName])

    return (
        <div ref={preloaderRef} className={["preloader", showPreloader ? 'show' : ''].join(' ')}>
            <Loader name={'preloader-loader'}/>
            <p>Loading...</p>
        </div>
    )
}


export default Preloader