import './About.scss'

import nftPreviewImage from './assets/nft-preview.png'
import nftPreviewImageBlur from './assets/nft-preview-blur.png'

import { ButtonAccent } from '../../components/UI/Button/Button'

const About = () => {
    return (
        <div className="about">
            <div className="about__collection">
                <img className='nft-preview-blur' src={nftPreviewImageBlur} alt="" />
                <img className='nft-preview' src={nftPreviewImage} alt="" />
            </div> 
            <div className="about__text-content">
                <h2>About seqchain nft</h2>
                <p>
                    <span>Our team of enthusiasts is happy to introduce the project at the intersection of ecology and realm with blockchain and NFT technology.</span>
                    <span>Seqсhain NFT is a tokenized Sequoia and a 20x20m piece of land. The token is located on the Binance Smart Chain network.</span> 
                    <span>By buying Seqchain NFT, you become the owner of one of 1000 real trees and a 400m2 plot of land.</span>
                </p>
                <ButtonAccent>Read Whitepaper</ButtonAccent>
            </div>
        </div>
    )
}

export default About