import React from 'react'
import './button.scss'

const ButtonOutlinePrimary = ({ children }) => {
    return (
        <button type='button' className='button button-outline-primary'>{ children }</button>
    )
}

const ButtonOutlineAccent = ({ value }) => {
    return (
        <button type='button' className='button button-outline-accent'>{ value }</button>
    )
}

const ButtonAccent = ({ value }) => {
    return (
        <button type='button' className='button button-accent'>{ value }</button>
    )
}

const ButtonSecondary = ({ value }) => {
    return (
        <button type='button' className='button button-secondary'>{ value }</button>
    )
}

export { 
    ButtonOutlinePrimary, 
    ButtonOutlineAccent,
    ButtonAccent,
    ButtonSecondary
}