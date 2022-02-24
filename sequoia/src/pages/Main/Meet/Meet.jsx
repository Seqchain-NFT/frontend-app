import react, { useRef, useEffect } from 'react'

import './Meet.scss'

import nftCommonImage from './assets/nft-common.png'
import nftCommonSkyImage from './assets/nft-common-sky.png'
import nftRareImage from './assets/nft-rare.png'
import nftRareSkyImage from './assets/nft-rare-sky.png'
import nftEpicImage from './assets/nft-epic.png'
import nftLegendaryImage from './assets/nft-legendary.png'
import nftLegendaryPlatformImage from './assets/nft-legendary-pattern.png'

import nftCommonImageWebp from './assets/nft-common.webp'
import nftCommonSkyImageWebp from './assets/nft-common-sky.webp'
import nftRareImageWebp from './assets/nft-rare.webp'
import nftRareSkyImageWebp from './assets/nft-rare-sky.webp'
import nftEpicImageWebp from './assets/nft-epic.webp'
import nftLegendaryImageWebp from './assets/nft-legendary.webp'
import nftLegendaryPlatformImageWebp from './assets/nft-legendary-pattern.webp'

import { ReactComponent as XgenerationIcon } from './assets/xgeneration.svg'
import { ReactComponent as CircleIcon } from './assets/circle.svg'
import { ReactComponent as InfoIcon } from './assets/info.svg'

import xImage from './assets/x.png'
import xImageWebp from './assets/x.webp'

import renderer from '../../../utils/renderer'

import Tooltip, { meetTooltipContent, meetTooltipClass } from '../../../components/UI/Tooltip/Tooltip'
import { LAPTOP_BREAKPOINT } from '../../../utils/constants'



const Meet = () => {
    const meetScreen = useRef()
    const commonCard = useRef()
    const rareCard = useRef()
    const epicCard = useRef()

    const nftLegend = useRef()


    useEffect(() => {
        renderer.setToRender(cardAnimation.bind(undefined, meetScreen, LAPTOP_BREAKPOINT, [commonCard, rareCard, epicCard]), 'cardAnimation')
        renderer.setToRender(meetMouseParallax.bind(undefined, meetScreen, nftLegend, LAPTOP_BREAKPOINT), 'meetMouseParallax')
        return () => {
            renderer.removeFromRender('cardAnimation')
            renderer.removeFromRender('meetMouseParallax')
        }
    }, [])

    return (
        <div id="generation" ref={meetScreen} className="meet">
            <div className="meet__header">
                <div className="meet__header-title">
                    <h2>Meet</h2>
                    <div className="x-generation">
                        <picture>
                            <source srcSet={xImageWebp} type="image/webp"/>
                            <source srcSet={xImage} type="image/png"/> 
                            <img src={xImage} alt="" />
                        </picture>
                        <XgenerationIcon/>
                    </div>
                </div>
                <div className="glass-card">
                    <p>Sequoia has been growing for thousands of years and covers different human eras.</p>
                </div>
                <div className="glass-card">
                    <p>Artifacts from these eras can be seen in the Seqchain NFT Alpha Generation.</p>
                </div>
            </div>

            <div className="meet__nft-list">
            <div ref={commonCard} className="meet__nft-card common">
                <div className="nft-card__description">
                    <div className="title">
                        <h3>Common</h3>
                        <div className="title__icon">
                            <div>5</div><div>%</div>
                            <CircleIcon/>
                        </div>
                    </div>
                    <div className="subtitle">
                        <div>15 SEQ/DAY</div>
                        <InfoIcon data-class={meetTooltipClass} data-html={true} data-tip={meetTooltipContent}/>
                    </div>
                    <p>The primitive structure of society, tribal symbols, and artifacts of the first people along with climate, weather conditions, and geography changes.</p>
                </div>
                <div className="nft-card__image">
                    <picture>
                        <source srcSet={nftCommonImageWebp} type="image/webp"/>
                        <source srcSet={nftCommonImage} type="image/png"/> 
                        <img className='nft' src={nftCommonImage} alt="" />
                    </picture>
                    <picture>
                        <source srcSet={nftCommonSkyImageWebp} type="image/webp"/>
                        <source srcSet={nftCommonSkyImage} type="image/png"/> 
                        <img className='sky' src={nftCommonSkyImage} alt="" />
                    </picture>
                </div>
            </div>

            <div ref={rareCard} className="meet__nft-card rare">
                <div className="nft-card__description">
                    <div className="title">
                        <h3>Rare</h3>
                        <div className="title__icon">
                            <div>25</div><div>%</div>
                            <CircleIcon/>
                        </div>
                    </div>
                    <div className="subtitle">
                        <div>25 SEQ/DAY</div>
                        <InfoIcon data-class={meetTooltipClass} data-html={true} data-tip={meetTooltipContent}/>
                    </div>
                    <p>The first echoes of civilization, artifacts of technological and industrial development. So here you can find easter eggs that will link to our next collections!</p>
                </div>
                <div className="nft-card__image">
                    <picture>
                        <source srcSet={nftRareImageWebp} type="image/webp"/>
                        <source srcSet={nftRareImage} type="image/png"/> 
                        <img className='nft' src={nftRareImage} alt="" />
                    </picture>
                    <picture>
                        <source srcSet={nftRareSkyImageWebp} type="image/webp"/>
                        <source srcSet={nftRareSkyImage} type="image/png"/> 
                        <img className='sky' src={nftRareSkyImage} alt="" />
                    </picture>
                </div>
            </div>

            <div ref={epicCard} className="meet__nft-card epic">
                <div className="nft-card__description">
                    <div className="title">
                        <h3>Epic</h3>
                        <div className="title__icon">
                            <div>10</div><div>%</div>
                            <CircleIcon/>
                        </div>
                    </div>
                    <div className="subtitle">
                        <div>35 SEQ/DAY</div>
                        <InfoIcon data-class={meetTooltipClass} data-html={true} data-tip={meetTooltipContent}/>
                    </div>
                    <p>This era, urbanization, and futurism. Mystical scenarios and unusual styles will pleasantly surprise you. For sure!</p>
                </div>
                <div className="nft-card__image">
                    <picture>
                        <source srcSet={nftEpicImageWebp} type="image/webp"/>
                        <source srcSet={nftEpicImage} type="image/png"/> 
                        <img className='nft' src={nftEpicImage} alt="" />
                    </picture>
                </div>
            </div>

            <div className="meet__nft">
                <div className="nft-card__description">
                    <div className="title">
                        <h3>Legendary</h3>
                        <p className="title__icon">
                            <span>5</span><span>%</span>
                            <CircleIcon/>
                        </p>
                    </div>
                    <p className="subtitle">
                        <span>50 SEQ/DAY</span>
                        <InfoIcon data-class={meetTooltipClass} data-html={true} data-tip={meetTooltipContent}/>
                    </p>
                    <p>The apogee of human development. Intergalactic journey with the spirit <br/>of the Sequoia Keeper. Sounds <br/>fantastical, right? </p>
                </div>
                <div className="nft-card__image">
                    <picture>
                            <source srcSet={nftLegendaryPlatformImageWebp} type="image/webp"/>
                            <source srcSet={nftLegendaryPlatformImage} type="image/png"/> 
                            <img className="platform" src={nftLegendaryPlatformImage} alt="" />
                    </picture>
                    <div className='legendary-wrapper' ref={nftLegend}>
                        <picture>
                            <source srcSet={nftLegendaryImageWebp} type="image/webp"/>
                            <source srcSet={nftLegendaryImage} type="image/png"/> 
                            <img src={nftLegendaryImage} alt="" />
                        </picture>
                    </div>
                </div>
            </div>
            </div>
            <Tooltip/>
        </div>
    )
}

function cardAnimation(meet, breakpoint, cards) {
    if (renderer.isElementVisible(meet.current) && window.innerWidth > breakpoint) {
        cards.forEach(card => {
            if (renderer.isElementVisible(card.current)) { card.current.classList.add('visible') }
        })
    } else { cards.forEach(card => {
        if (card.current.classList.contains('visible')) { card.current.classList.remove('visible') }
    })}
}

function meetMouseParallax(meet, legendaryNft, breakpoint) {
    if (renderer.isElementVisible(meet.current) && window.innerWidth > breakpoint) {
        const mouse = renderer.getMouseWindowCoords()
        legendaryNft.current.style.transform = `translate3d(${mouse.x / 200}px, ${mouse.y / 200}px, 0)`
    }
}



export default Meet