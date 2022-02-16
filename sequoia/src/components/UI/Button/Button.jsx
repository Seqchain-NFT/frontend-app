import React from 'react'
import './Button.scss'

const ButtonOutlinePrimary = ({ children, onClick }) => {
    return (
        <button onClick={onClick} type='button' className='button button-outline-primary'>{ children }</button>
    )
}

const ButtonOutlineAccent = ({ children }) => {
    return (
        <button type='button' className='button button-outline-accent'>{ children }</button>
    )
}

const ButtonAccent = ({ children }) => {
    return (
        <button type='button' className='button button-accent'>{ children }</button>
    )
}

const ButtonSecondary = ({ children }) => {
    return (
        <button type='button' className='button button-secondary'>{ children }</button>
    )
}

const ButtonEmpty = ({ children }) => {
    return (
        <button type='button' className='button-empty'>{ children }</button>
    )
}

export { 
    ButtonOutlinePrimary, 
    ButtonOutlineAccent,
    ButtonAccent,
    ButtonSecondary,
    ButtonEmpty
}