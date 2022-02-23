import { useRef, useEffect, useState } from 'react'

import './Roadmap.scss'

import { ButtonOutlinePrimary } from '../../../components/UI/Button/Button'

import renderer from '../../../utils/renderer'

const roadmap = [
    {
        'Q3 2021': [
            {
                body: 'Sequoia seedling preparation',
                done: true,
            },
            {
                body: 'Buying 50 hectares of land in Albota de Sus, Moldova',
                done: true,
            }
        ]
    },
    {
        'Q4 2021': [
            {
                body: 'Seqchain idea development',
                done: true,
            },
            {
                body: 'Content development for the site',
                done: true,
            }
        ]
    },
    {
        'Q1 2022': [
            {
                body: 'Website',
                done: true,
            },
            {
                body: 'Whitepaper',
                done: true,
            },
            {
                body: 'Pitch Deck',
                done: false,
            },
            {
                body: 'Attracting partners',
                done: false,
            },
            {
                body: 'Twitter / Discord / Telegram',
                done: false,
            },
            {
                body: 'Drawing Seqchain NFT Alpha Generation',
                done: false,
            },
            {
                body: 'Smart-contracts development',
                done: false,
            },
            {
                body: 'Alpha Gen. Whitelist & Presale',
                done: false,
            },
            {
                body: 'Alpha Gen. Public Sale',
                done: false,
            },
        ],
    },
    {
        'Q2 2022': [
            {
                body: 'Drawing the Sequoia Shaman Collection',
                done: false,
            },
            {
                body: 'Sequoia Shaman smart-contract development',
                done: false,
            },
            {
                body: 'Frontend and backend development for Sequoia Shaman',
                done: false,
            },
            {
                body: 'Sequoia Shaman Presale (for Seqchain NFT Alpha Gen. owners)',
                done: false,
            },
            {
                body: 'Sequoia Shaman Public Sale',
                done: false,
            },
        ],
    },
    {
        'Q3 2022': [
            {
                body: 'SEQ Token Presale',
                done: false,
            },
            {
                body: 'SEQ Token Public Sale',
                done: false,
            },
            {
                body: 'Token listing',
                done: false,
            },
            {
                body: 'Tokenomics',
                done: false,
            },
            {
                body: 'Game Design',
                done: false,
            },
            {
                body: 'Game Story Telling',
                done: false,
            },
            {
                body: 'Game presentation',
                done: false,
            },
        ],
    },
    {
        'Q4 2022': [
            {
                body: 'Coming Soon',
                done: false,
            },
        ],
    },
    {
        'Q1 2023': [
            {
                body: 'Coming Soon',
                done: false,
            },
        ],
    },
    {
        'Q2 2023': [
            {
                body: 'Landing 1000 Sequoias in the ground',
                done: false,
            },
            {
                body: 'Installation of webcams on Sequoia`s plots of land',
                done: false,
            },
            {
                body: 'Live broadcast of the tree on the personal page',
                done: false,
            },
        ],
    },
]

const dividerHeight = 20 // in %

const Roadmap = () => {
    const roadmapRef = useRef()
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        renderer.setToRender(roadmapScrollParallax.bind(undefined, roadmapRef), 'roadmapScrollParallax')
        return () => {
            renderer.removeFromRender('roadmapScrollParallax')
        }
    }, [])

    return (
        <div id="roadmap" ref={roadmapRef} className={isActive ? 'roadmap active' : 'roadmap'}>
            <h2>Roadmap</h2>
            <div className="roadmap__scheme">
                <div className="roadmap__scheme-divider">
                    <div className="divider" style={{height: dividerHeight + '%'}}></div>
                </div>
                {roadmap.map(stage => {
                    const stageArray = Object.entries(stage)
                    return (
                        <div key={stageArray[0][0]} className="roadmap__row">
                            <div><h4 className={ isStageDone(stageArray[0][1]) }>{stageArray[0][0]}</h4></div>
                            <div></div>
                            <div>
                                {stageArray[0][1].map((listItem, idx) => {
                                    return (
                                        <p key={idx} className={ listItem.done ? 'done' : '' }>
                                            <span>{ idx + 1 }.</span>
                                            <span>{ listItem.body }</span>
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="roadmap__button">
                <ButtonOutlinePrimary onClick={() => setIsActive(true)}>Show More</ButtonOutlinePrimary>
            </div>
        </div>
    )
}

function isAllDone(array) {
    let doneCount = 0
    array.forEach(element => {
        if (element.done) doneCount++
    })
    return doneCount === array.length
}

function isStageDone(array) {
    let classes = ''
    if (array[0].done) classes += 'done'
    if (isAllDone(array)) classes += ' all-done'
    return classes
}

function roadmapScrollParallax(roadmap) {
    if (renderer.isElementVisible(roadmap.current)) {
        const translateY = renderer.getScrollCoordsFromElement(roadmap.current).windowBottom.fromTop
        roadmap.current.style.transform = `translate3d(0, ${translateY / 5}px, 0)`
    }
}

export default Roadmap