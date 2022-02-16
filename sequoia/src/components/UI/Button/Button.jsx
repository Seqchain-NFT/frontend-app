import React from 'react'
import './Button.scss'

const ButtonOutlinePrimary = ({ children, onClick }) => {
    return (
        <button onClick={onClick} type='button' className='button button-outline-primary'>{ children }</button>
    )
}

const ButtonOutlineAccent = ({ children, onClick }) => {
    return (
        <button onClick={onClick} type='button' className='button button-outline-accent'>{ children }</button>
    )
}

const ButtonAccent = ({ children, onClick }) => {
    return (
        <button onClick={onClick} type='button' className='button button-accent'>{ children }</button>
    )
}

const ButtonSecondary = ({ children, onClick }) => {
    return (
        <button onClick={onClick} type='button' className='button button-secondary'>{ children }</button>
    )
}

const ButtonEmpty = ({ children, onClick }) => {
    return (
        <button onClick={onClick} type='button' className='button-empty'>{ children }</button>
    )
}

export { 
    ButtonOutlinePrimary, 
    ButtonOutlineAccent,
    ButtonAccent,
    ButtonSecondary,
    ButtonEmpty
}