import { useRef, useEffect } from 'react'

import './Welcome.scss'
import groundImage from './ground.png'
import nftCommonImage from './nft-common.png'
import nftRareImage from './nft-rare.png'
import nftLegendaryImage from './nft-legendary.png'

import { ReactComponent as DiscordIcon } from '../../assets/svg/discord.svg'

import { ButtonAccent, ButtonSecondary } from '../../components/UI/Button/Button'

import renderer from '../../utils/renderer'

const Welcome = () => {
    const ground = useRef()
    const parallaxElements = new Array(3)
    parallaxElements[0] = useRef()
    parallaxElements[1] = useRef()
    parallaxElements[2] = useRef()

    const canvas = useRef()

    useEffect(() => {
        renderer.setToRender(groundParallax.bind(undefined, ground.current), 'groundParallax')
        renderer.setToRender(welcomeMouseParallax.bind(undefined, ground.current, parallaxElements), 'welcomeMouseParallax')

        const context = canvas.current.getContext('2d')
        renderer.setToRender(canvasAnimation.bind(undefined, canvas.current, context), 'canvasAnimation')
    }, [])

    return (
        <div className="welcome">
            <div className="welcome__canvas">
                <img ref={ground} className="welcome__canvas-ground" src={groundImage} alt=""/>
                <canvas ref={canvas}></canvas>
                <div className="welcome__canvas-nfts">
                    <img src={nftCommonImage} ref={parallaxElements[0]} className="nft-common" alt="" />
                    <img src={nftRareImage} ref={parallaxElements[1]} className="nft-rare" alt="" />
                    <img src={nftLegendaryImage} ref={parallaxElements[2]} className="nft-legendary" alt="" />
                </div>
            </div>
            <div className="welcome__text-content">
                <h1><span>SEQ</span>CHAIN</h1>
                <div className="welcome__action-buttons">
                    <ButtonAccent>read whitepaper</ButtonAccent>
                    <ButtonSecondary><DiscordIcon/>JOIN DISCORD</ButtonSecondary>
                </div>
                <div className="welcome__description">
                    <div className="welcome__description-card">
                        <h2>Real tree <br/>owner</h2>
                        <p>With the purchase of the Seqchain NFT you become the owner of a real Sequoia tree and a 20x20 meter plot of land in Taraclia, Moldova.</p>
                    </div>
                    <div className="welcome__description-card">
                        <h2>Make impact on <br/>ecology</h2>
                        <p>Sequoia is one of the most ancient and durable trees in the world. It consumes a record amount of CO2 and purifies the air we breathe. </p>
                    </div>
                    <div className="welcome__description-card">
                        <h2>Grow to <br/>Earn</h2>
                        <p>The tree grows - you earn. Simple as that, right? Every day Seqchain NFT bears fruits in the form of SEQ coins. Don’t hesitate to make a profit from the sale of new trees!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function groundParallax(ground) {
    if (renderer.isElementVisible(ground)) {
        ground.style.transform = `translate3d(0, ${window.scrollY / 5}px, 0)`
    }
}

function welcomeMouseParallax(ground, domElements) {
    if (renderer.isElementVisible(ground)) {
        const mouse = renderer.getMouseDocumentCoords()
        domElements.forEach((element, idx) => {
            element.current.style.transform = `translate3d(${mouse.x * (idx + 1) / 200}px, ${mouse.y * (idx + 1) / 200}px, 0)`
        })
    }
}

function canvasAnimation(canvas, context) {
    if (renderer.isElementVisible(canvas)) {

    }
    canvasAdaptive(canvas)
}

function canvasAdaptive(canvas) {

}

export default Welcome