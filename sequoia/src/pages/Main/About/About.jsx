import './About.scss'

import nftPreviewImage from './assets/nft-preview.png'
import nftPreviewImageWebp from './assets/nft-preview.webp'
import nftPreviewImageBlur from './assets/nft-preview-blur.png'
import nftPreviewImageBlurWebp from './assets/nft-preview-blur.webp'


import {ButtonAccent} from '../../../components/UI/Button/Button'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about__collection">
                <picture>
                    <source srcSet={nftPreviewImageBlurWebp} type="image/webp"/>
                    <source srcSet={nftPreviewImageBlur} type="image/png"/>
                    <img className='nft-preview-blur' src={nftPreviewImageBlur} alt=""/>
                </picture>
                <picture>
                    <source srcSet={nftPreviewImageWebp} type="image/webp"/>
                    <source srcSet={nftPreviewImage} type="image/png"/>
                    <img className='nft-preview' src={nftPreviewImage} alt="nft"/>
                </picture>
            </div>
            <div className="about__text-content">
                <h2>About seqchain nft</h2>
                <p>
                    <span>Seqchain is an innovative ecological blockchain project.</span>
                    <span>We are focused on the revival of a rare species of the Sequoia tree.</span>
                    <span>We are focused on the revival of a rare species of the Sequoia tree. This tree has the environmental status of an “endangered” one. </span>
                    <span>Our team works on the distribution of Sequoia and the tokenization of these evergreen trees and the land they are planted on.</span>
                </p>
                <a href="https://wp.seqchain.com" target="_blank" rel='noreferrer'><ButtonAccent>Read Whitepaper</ButtonAccent></a>
            </div>
        </div>
    )
}

export default About