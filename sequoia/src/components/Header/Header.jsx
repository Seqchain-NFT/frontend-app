import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import './Header.scss'

import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as ExitIcon } from './assets/exit.svg'
import { ReactComponent as UserIcon } from './assets/user.svg'


import { ButtonOutlinePrimary, ButtonOutlineAccent, ButtonEmpty } from '../UI/Button/Button'

import { PopupContext } from '../../context/PopupContext'
import { Web3Context } from '../../context/Web3Context'

import renderer from '../../utils/renderer'
import scrollTo from '../../utils/scrollTo';

const Header = (props) => {
    const [showPopupName, setShowPopupName] = React.useContext(PopupContext)
    const [isAuthorised, setIsAuthorised] = React.useContext(Web3Context)

    const [isScrolled, setIsScrolled] = useState(false)

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

    const NavigateButton = () => {
        if (window.location.href.includes('profile')) {
            return <Link to="/"><ButtonOutlinePrimary>Main</ButtonOutlinePrimary></Link>
        }
        return <Link to="profile"><ButtonOutlinePrimary><UserIcon/>Profile</ButtonOutlinePrimary></Link>
    }

    const Buttons = () => {
        if (isAuthorised) {
            return (
                <div className="buttons">
                    <ButtonOutlinePrimary onClick={() => setShowPopupName('popup-mint')}>Mint</ButtonOutlinePrimary>
                    <NavigateButton/>
                    <Link to="/"><ButtonEmpty onClick={() => setIsAuthorised(false)}><ExitIcon/></ButtonEmpty></Link>
                </div>
            )
        }
        return <ButtonOutlineAccent onClick={() => setShowPopupName('popup-connect')}>Connect Wallet</ButtonOutlineAccent>
    }

    const Nav = () => {
        if (window.location.href.includes('profile')) {
            return <nav></nav>
        }
        return (
            <nav>
                <a onClick={() => scrollTo('#about')} data-text="about"><span>about</span></a>
                <a onClick={() => scrollTo('#generation')} data-text="alpha generation"><span>alpha generation</span></a>
                <a onClick={() => scrollTo('#utility')} data-text="utility"><span>utility</span></a>
                <a onClick={() => scrollTo('#mission')} data-text="mission"><span>mission</span></a>
                <a onClick={() => scrollTo('#roadmap')} data-text="Roadmap"><span>Roadmap</span></a>
                <a onClick={() => scrollTo('#faq')} data-text="FAQ"><span>FAQ</span></a>
            </nav>
        )
    }

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <Link className="logo" to="/"><Logo/></Link>
            <Nav/>
            <Buttons/>
        </header>
    )
}

export default Header