import React from 'react'
import './Header.scss'

import { ReactComponent as Logo } from './assets/logo.svg'
import { ButtonOutlinePrimary, ButtonOutlineAccent } from '../UI/Button/Button'

const Header = () => {
    return (
        <header>
            <a className="logo" href="#"><Logo/></a>
            <nav>
                <a href="#about" data-text="about"><span>about</span></a>
                <a href="#generation" data-text="alpha generation"><span>alpha generation</span></a>
                <a href="#utility" data-text="utility"><span>utility</span></a>
                <a href="#mission" data-text="mission"><span>mission</span></a>
                <a href="#Roadmap" data-text="Roadmap"><span>Roadmap</span></a>
                <a href="#FAQ" data-text="FAQ"><span>FAQ</span></a>
            </nav>
            <ButtonOutlinePrimary>Mint</ButtonOutlinePrimary>
            <ButtonOutlineAccent>Connect Wallet</ButtonOutlineAccent>
        </header>
    )
}

export default Header