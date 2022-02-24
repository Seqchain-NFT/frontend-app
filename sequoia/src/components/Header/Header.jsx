import React, {useState, useEffect} from 'react'
import {Link, useLocation} from "react-router-dom";

import './Header.scss'

import {ReactComponent as Logo} from './assets/logo.svg'
import {ReactComponent as ExitIcon} from './assets/exit.svg'
import {ReactComponent as UserIcon} from './assets/user.svg'

import {ButtonOutlinePrimary, ButtonOutlineAccent, ButtonEmpty} from '../UI/Button/Button'

import {PopupContext} from '../../context/PopupContext'

import renderer from '../../utils/renderer'
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const [showPopupName, setShowPopupName] = React.useContext(PopupContext)
    const {account} = useActiveWeb3React()

    const [isScrolled, setIsScrolled] = useState(false)
    const {logout} = useAuth()

    const {pathname} = useLocation()

    useEffect(() => {
        renderer.setToRender(scrollHeader.bind(undefined, setIsScrolled), 'scrollHeader')
        return () => renderer.removeFromRender('scrollHeader')
    }, [])

    function scrollHeader(setIsScrolled) {
        if (window.scrollY >= 100) {
            setIsScrolled(true)
            return
        }
        setIsScrolled(false)
    }

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <Link className="logo" to="/"><Logo/></Link>
            {
                pathname.includes('profile')
                    ? <nav/>
                    :
                    <nav>
                        <a href="#about" data-text="about"><span>about</span></a>
                        <a href="#generation" data-text="alpha generation"><span>alpha generation</span></a>
                        <a href="#utility" data-text="utility"><span>utility</span></a>
                        <a href="#mission" data-text="mission"><span>mission</span></a>
                        <a href="#Roadmap" data-text="Roadmap"><span>Roadmap</span></a>
                        <a href="#FAQ" data-text="FAQ"><span>FAQ</span></a>
                    </nav>
            }
            {
                account
                    ? <div className="buttons">
                        <ButtonOutlinePrimary onClick={() => setShowPopupName('popup-mint')}>Mint</ButtonOutlinePrimary>
                        {
                            pathname.includes('profile')
                                ? <Link to="/"><ButtonOutlinePrimary>Main</ButtonOutlinePrimary></Link>
                                : <Link to="profile"><ButtonOutlinePrimary><UserIcon/>Profile</ButtonOutlinePrimary></Link>
                        }
                        <Link to="/"><ButtonEmpty onClick={logout}><ExitIcon/></ButtonEmpty></Link>
                    </div>
                    : <ButtonOutlineAccent onClick={() => setShowPopupName('popup-connect')}>Connect
                        Wallet</ButtonOutlineAccent>
            }
        </header>
    )
}

export default Header