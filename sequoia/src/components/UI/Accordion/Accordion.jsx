import { useState } from 'react'

import './Accordion.scss'

import { ReactComponent as ChevronIcon } from './assets/chevron.svg'

const Accordion = ({ title, body }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div onClick={() => setIsActive(!isActive)} className={isActive ? 'accordion active' : 'accordion'}>
            <div className="accordion__title">
                <p>{ title }</p>
                <ChevronIcon/>
            </div>
            <div className="accordion__body">
                <p>{ body }</p>
            </div>
        </div>
    )
}

export default Accordion