import { useRef, useEffect } from 'react'

import './Mission.scss'

import forestVideo from './assets/forest.mp4'

import renderer from '../../utils/renderer'

const Mission = () => {
    const video = useRef()
    const mission = useRef()

    useEffect(() => {
        renderer.setToRender(missionMouseParallax.bind(undefined, video, mission), 'missionMouseParallax')
        return () => {
            renderer.removeFromRender('missionMouseParallax')
        }
    }, [])

    return (
        <div ref={mission} className="mission">
            <div className="mission__card">
                <video ref={video} autoPlay muted="muted" playsInline loop poster="">
                    <source src={forestVideo} type="video/mp4" />
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

function missionMouseParallax(video, mission) {
    if (renderer.isElementFullyVisible(mission.current)) {
        const mouseX = (renderer.getMouseWindowCoords().x / window.innerWidth) * 2 - 1;
        const mouseY = -(renderer.getMouseWindowCoords().y / window.innerHeight) * 2 + 1;
        video.current.style.transform = `translate3d(${- mouseX * 30}px, ${mouseY * 30}px, 0) scale(1.15)`
    }
}

export default Mission