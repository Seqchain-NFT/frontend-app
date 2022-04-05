import './Preloader.scss'

import Loader from '../UI/Loader/Loader'
import { useContext, useEffect, useRef } from 'react'
import { PopupContext } from '../../context/PopupContext'

const Preloader = () => {
    const preloaderRef = useRef()
    const [showPopupName, setShowPopupName] = useContext(PopupContext) // чтобы отключить скролл

    useEffect(() => {
        setShowPopupName('popup-preloader')
        window.addEventListener('DOMContentLoaded', removePreloader.bind(undefined, preloaderRef.current, setShowPopupName))
        return () => window.removeEventListener('DOMContentLoaded', removePreloader.bind(undefined, preloaderRef.current, setShowPopupName))
    }, [setShowPopupName])

    return (
        <div ref={preloaderRef} className="preloader">
            <Loader name={'preloader-loader'}/>
            <p>Loading...</p>
        </div>
    )
}

const removePreloader = (preloaderDom, setShowPopupName) => {
    const delay = 1500
    const duration = 500
    setTimeout(() => {
        preloaderDom.style.cssText = `
            transition: ${duration}ms ease;
            opacity: 0;
        `
        setTimeout(() => {
            preloaderDom.remove()
        }, duration)
        setShowPopupName('')
    }, delay)
}

export default Preloader