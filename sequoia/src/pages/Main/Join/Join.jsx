import './Join.scss'

import discordImage from './assets/discord.png'
import instagramImage from './assets/instagram.png'
import telegramImage from './assets/telegram.png'
import twitterImage from './assets/twitter.png'

import discordImageWebp from './assets/discord.webp'
import instagramImageWebp from './assets/instagram.webp'
import telegramImageWebp from './assets/telegram.webp'
import twitterImageWebp from './assets/twitter.webp'


const Join = () => {
    return (
        <div className="join">
            <a className='join__instagram' href="#">
                <picture>
                        <source srcSet={instagramImageWebp} type="image/webp"/>
                        <source srcSet={instagramImage} type="image/png"/> 
                        <img src={instagramImage} alt="" />
                </picture>
            </a>
            <a className='join__discord' href="https://discord.gg/zS6AhyGhSD" target="_blank">
                <picture>
                        <source srcSet={discordImageWebp} type="image/webp"/>
                        <source srcSet={discordImage} type="image/png"/> 
                        <img src={discordImage} alt="" />
                </picture>
            </a>
            <h2>Join the<br/><span>community</span><br/>right away!</h2>
            <a className='join__twitter' href="#">
                <picture>
                        <source srcSet={twitterImageWebp} type="image/webp"/>
                        <source srcSet={twitterImage} type="image/png"/> 
                        <img src={twitterImage} alt="" />
                </picture>
            </a>
            <a className='join__telegram' href="#">
                <picture>
                        <source srcSet={telegramImageWebp} type="image/webp"/>
                        <source srcSet={telegramImage} type="image/png"/> 
                        <img src={telegramImage} alt="" />
                </picture>
            </a>
        </div>
    )
}

export default Join