import React from 'react'
import { Link } from "react-router-dom";

import './Header.scss'

import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as ExitIcon } from './assets/exit.svg'
import { ReactComponent as UserIcon } from './assets/user.svg'


import { ButtonOutlinePrimary, ButtonOutlineAccent, ButtonEmpty } from '../UI/Button/Button'

import { PopupContext } from '../../context/PopupContext'
import { Web3Context } from '../../context/Web3Context'

const Header = (props) => {
    const [showPopupName, setShowPopupName] = React.useContext(PopupContext)
    const [isAuthorised, setIsAuthorised] = React.useContext(Web3Context)

    const NavigateButton = () => {
        if (window.location.pathname === '/profile') {
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
        if (window.location.pathname === '/profile') {
            return <nav></nav>
        }
        return (
            <nav>
                <a href="#about" data-text="about"><span>about</span></a>
                <a href="#generation" data-text="alpha generation"><span>alpha generation</span></a>
                <a href="#utility" data-text="utility"><span>utility</span></a>
                <a href="#mission" data-text="mission"><span>mission</span></a>
                <a href="#Roadmap" data-text="Roadmap"><span>Roadmap</span></a>
                <a href="#FAQ" data-text="FAQ"><span>FAQ</span></a>
            </nav>
        )
    }

    return (
        <header>
            <Link className="logo" to="/"><Logo/></Link>
            <Nav/>
            <Buttons/>
        </header>
    )
}

export default Header