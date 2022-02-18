import { useRef, useEffect } from 'react'

import './Welcome.scss'

import groundImage from './assets/ground.png'
import groundShadowImage from './assets/shadow.png'
import nftCommonImage from './assets/nft-common.png'
import nftRareImage from './assets/nft-rare.png'
import nftLegendaryImage from './assets/nft-legendary.png'

import blur1 from './assets/blur-1.png'
import blur2 from './assets/blur-2.png'
import blur3 from './assets/blur-3.png'
import blur4 from './assets/blur-4.png'

import { ReactComponent as DiscordIcon } from './assets/discord.svg'
import { ButtonAccent, ButtonSecondary } from '../../../components/UI/Button/Button'

import renderer from '../../../utils/renderer'
import { LAPTOP_BREAKPOINT } from '../../../utils/constants'


const Welcome = () => {
    const ground = useRef()
    const parallaxElements = new Array(3)
    parallaxElements[0] = useRef()
    parallaxElements[1] = useRef()
    parallaxElements[2] = useRef()

    const canvas = {
        dom: useRef(),
        context: null,
        width: 0,
        height: 0,
        blursCount: 60,
        blurImages: [],
        mouseRadius: 250,
        ground,
        breakpoint: LAPTOP_BREAKPOINT,
    }

    useEffect(() => {
        renderer.setToRender(groundParallax.bind(undefined, ground.current, canvas.dom.current), 'groundParallax')
        renderer.setToRender(welcomeMouseParallax.bind(undefined, ground.current, parallaxElements, canvas.breakpoint), 'welcomeMouseParallax')

        canvas.context = canvas.dom.current.getContext('2d')
        ground.current.onload = () => canvas.blurImages = generateBlursImages.apply(canvas, [ blur1, blur2, blur3, blur4 ])
        renderer.setToRender(canvasAnimation.bind(canvas), 'canvasAnimation')

        return () => {
            renderer.removeFromRender('groundParallax')
            renderer.removeFromRender('welcomeMouseParallax')
            renderer.removeFromRender('canvasAnimation')
        }
    }, [])

    return (
        <div className="welcome">
            <div className="welcome__canvas">
                <img className="welcome__canvas-shadow" src={groundShadowImage} alt="" />
                <img ref={ground} className="welcome__canvas-ground" src={groundImage} alt=""/>
                <canvas ref={canvas.dom}></canvas>
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
                        <h3>Real tree <br/>owner</h3>
                        <p>With the purchase of the Seqchain NFT you become the owner of a real Sequoia tree and a 20x20 meter plot of land in Taraclia, Moldova.</p>
                    </div>
                    <div className="welcome__description-card">
                        <h3>Make impact on <br/>ecology</h3>
                        <p>Sequoia is one of the most ancient and durable trees in the world. It consumes a record amount of CO2 and purifies the air we breathe. </p>
                    </div>
                    <div className="welcome__description-card">
                        <h3>Grow to <br/>Earn</h3>
                        <p>The tree grows - you earn. Simple as that, right? Every day Seqchain NFT bears fruits in the form of SEQ coins. Don’t hesitate to make a profit from the sale of new trees!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function groundParallax(ground, canvas) {
    if (renderer.isElementVisible(ground)) {
        ground.style.transform = `translate3d(0, ${window.scrollY / 5}px, 0)`
        canvas.style.transform = `translate3d(0, ${window.scrollY / 8}px, 0)`
    }
}

function welcomeMouseParallax(ground, domElements, breakpoint) {
    if (renderer.isElementVisible(ground) && window.innerWidth > breakpoint ) {
        const mouse = renderer.getMouseWindowCoords()
        domElements.forEach((element, idx) => {
            element.current.style.transform = `translate3d(${mouse.x * (idx + 1) / 200}px, ${mouse.y * (idx + 1) / 200}px, 0)`
        })
    }
}

function generateBlursImages(...blurUrls) {
    const blurs = []
    for (let i = 0; i < this.blursCount; i++) {
        const img = new Image(50, 50)
        const index = getRandomIntInclusive(0, blurUrls.length - 1)
        img.src = blurUrls[index]
        img.onload = () => { console.log('LOADED BLURED NFT'); blurs[i].loaded = true }
        blurs.push({
            img,
            x: getRandomIntInclusive(0, window.innerWidth),
            y: getRandomIntInclusive(0, this.dom.current.getBoundingClientRect().height - 100),
            dir: getDirection(),
            speed: 0.25,
            loaded: false
        })
    }
    return blurs
}

function getDirection() {
    if (Math.random() <= 0.5) { return -1 }
    return 1
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function canvasAnimation() {
    if (renderer.isElementVisible(this.dom.current)) {
        const mouse = renderer.getMouseDocumentCoords()
        this.context.clearRect(0, 0, this.width, this.height)
        this.blurImages.forEach(blur => {
            if (!blur.loaded) { return }

            this.context.drawImage(blur.img, blur.x, blur.y, this.width / 30, this.width / 30)

            blur.x += blur.speed * blur.dir
            blur.y += blur.speed * blur.dir
            if (blur.x <= -50 || blur.x >= this.width || blur.y <= -50 || blur.y >= this.height - 150 ) {
                blur.dir *= -1
            }

            // move on hover
            if ( (blur.x - mouse.x) ** 2 + (blur.y - mouse.y) ** 2 <= this.mouseRadius ** 2 && window.innerWidth > this.breakpoint ) {
                let blurX = 0, blurY = 0
                const deltaX = mouse.x - blur.x
                const deltaY = mouse.y - blur.y
                if ( Math.abs(deltaX) > Math.abs(deltaY) ) {
                  if (deltaX > 0) {
                    blurX = blur.x - 0.5
                    blurY = ( -(mouse.x * blur.y - blur.x * mouse.y) - (mouse.y - blur.y) * blurX ) / ( blur.x - mouse.x )
                  }
                  if (deltaX <= 0) {
                    blurX = blur.x + 0.5
                    blurY = ( -(mouse.x * blur.y - blur.x * mouse.y) - (mouse.y - blur.y) * blurX ) / ( blur.x - mouse.x )
                  }
                } else {
                  if (deltaY > 0) {
                    blurY = blur.y - 0.5
                    blurX = ( -(mouse.x * blur.y - blur.x * mouse.y) - (blur.x - mouse.x) * blurY ) / ( mouse.y - blur.y )
                  }
                  if (deltaY <= 0) {
                    blurY = blur.y + 0.5
                    blurX = ( -(mouse.x * blur.y - blur.x * mouse.y) - (blur.x - mouse.x) * blurY ) / ( mouse.y - blur.y )
                  }
                }
                if (blurX <= -50 || blurX >= this.width || blurY <= -50 || blurY >= this.height - 150 ) { return }
                blur.x = blurX
                blur.y = blurY
            }


        })
    }
    canvasAdaptive.apply(this)
}

function canvasAdaptive() {
    const canvas = this.dom.current.getBoundingClientRect()
    if (this.width !== canvas.width || this.height !== canvas.height) {
        this.width = canvas.width
        this.height = canvas.height
        this.dom.current.width = this.width
        this.dom.current.height = this.height
    }
}

export default Welcome