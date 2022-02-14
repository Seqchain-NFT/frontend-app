import { useRef, useEffect } from 'react'

import './Mission.scss'

import renderer from '../../utils/renderer'

const Mission = () => {
    const video = useRef()
    useEffect(() => {
        renderer.setToRender(missionMouseParallax.bind(undefined, video), 'missionMouseParallax')
        return () => renderer.removeFromRender('missionMouseParallax')
    }, [])

    return (
        <div className="mission">
            <div className="mission__card">
                <video ref={video} autoPlay muted playsInline poster="">
                    <source src='' />
                </video>
                <h2>Our mission</h2>
                <p>
                    <span>So, what about our goals? We aim to gather a large, close-knit community that we can grow with over 100,000 sequoias and launch many more interesting projects.</span>
                    <span>We want to provide benefits to everyone involved in our projects. That is why we have prepared a large number of perks for the holders of our first 1000 Seqchain NFT. These goodies will definitely give you an advantage in our future projects and P2E & F2P game!</span>
                </p>
            </div>
        </div>
    )
}

function missionMouseParallax(video) {
    if (renderer.isElementVisible(video.current)) {
        const mouseX = (renderer.getMouseWindowCoords().x / window.innerWidth) * 2 - 1;
        const mouseY = -(renderer.getMouseWindowCoords().y / window.innerHeight) * 2 + 1;
        video.current.style.transform = `translate3d(${mouseX * 100}px, ${mouseY * 100}px, 0)`
    }
}

export default Mission