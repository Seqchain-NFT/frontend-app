import './Join.scss'

import discordImage from './assets/discord.png'
import instagramImage from './assets/instagram.png'
import telegramImage from './assets/telegram.png'
import twitterImage from './assets/twitter.png'


const Join = () => {
    return (
        <div className="join">
            <a className='join__discord' href="#"><img src={discordImage} alt="" /></a>
            <a className='join__instagram' href="#"><img src={instagramImage} alt="" /></a>
            <h2>Join the<br/><span>community</span><br/>right away!</h2>
            <a className='join__twitter' href="#"><img src={twitterImage} alt="" /></a>
            <a className='join__telegram' href="#"><img src={telegramImage} alt="" /></a>
        </div>
    )
}

export default Join