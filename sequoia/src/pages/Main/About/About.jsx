import './About.scss'

import nftPreviewImage from './assets/nft-preview.png'
import nftPreviewImageWebp from './assets/nft-preview.webp'
import nftPreviewImageBlur from './assets/nft-preview-blur.png'
import nftPreviewImageBlurWebp from './assets/nft-preview-blur.webp'


import { ButtonAccent } from '../../../components/UI/Button/Button'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about__collection">
                <picture>
                    <source srcSet={nftPreviewImageBlurWebp} type="image/webp"/>
                    <source srcSet={nftPreviewImageBlur} type="image/png"/> 
                    <img className='nft-preview-blur' src={nftPreviewImageBlur} alt="" />
                </picture>
                <picture>
                    <source srcSet={nftPreviewImageWebp} type="image/webp"/>
                    <source srcSet={nftPreviewImage} type="image/png"/> 
                    <img className='nft-preview' src={nftPreviewImage} alt="nft" />
                </picture>
            </div> 
            <div className="about__text-content">
                <h2>About seqchain nft</h2>
                <p>
                    <span>Our team of enthusiasts is happy to introduce the project at the intersection of ecology and realm with blockchain and NFT technology.</span>
                    <span>Seqсhain NFT is a tokenized Sequoia and a 20x20m piece of land. The token is located on the Ethereum Network network.</span> 
                    <span>By buying Seqchain NFT, you become the owner of one of 1000 real trees and a 400m2 plot of land.</span>
                </p>
                <a href="https://wp.seqchain.com" target="_blank"><ButtonAccent>Read Whitepaper</ButtonAccent></a>
            </div>
        </div>
    )
}

export default About