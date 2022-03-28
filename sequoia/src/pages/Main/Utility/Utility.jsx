import './Utility.scss'
import { Scrollbar } from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { ReactComponent as seq } from './assets/seq.svg'
import { ReactComponent as co2 } from './assets/co2.svg'
import { ReactComponent as coin } from './assets/coin.svg'
import { ReactComponent as game } from './assets/game.svg'
import { ReactComponent as land } from './assets/land.svg'
import { ReactComponent as leaf } from './assets/leaf.svg'
import { ReactComponent as owners } from './assets/owners.svg'
import { ReactComponent as seqs } from './assets/seqs.svg'
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import { LAPTOP_BREAKPOINT } from '../../../utils/constants';



const slides = [
    {
        icon: seq,
        title: 'Revival of an endangered tree species',
        body: 'Sequoia has the status of an endangered species. By purchasing a Seqchain NFT token, you are helping to spread the redwoods exponentially every two years.',
        text: 'for ecology',
    },
    {
        icon: co2,
        title: 'Purification of the planet`s air from CO2',
        body: '1 Sequoia for the entire life cycle (~2000 years) absorbs about 500,000 kg of CO2. The owner of Seqchain NFT contributes to the improvement of the ecology of our planet. Become one of them!',
    },
    {
        icon: coin,
        title: 'Farming SEQ coins',
        body: 'The tree will bear fruit in the form of mining SEQ coins every 24 hours. You can spend these coins on buying the following NFT collections, improving the territory where your tree is located, and exchanging for valuable items from other projects of our team.',
        text: 'for user',
    },
    {
        icon: seqs,
        title: 'Earnings from the creation of new Seqchain NFT',
        body: 'Every two years, we form two new seedlings from each sequoia. We buy new plots of land and prepare seedlings for planting in the ground. The owner of Seqchain NFT will earn from the sale of each seedling and all subsequent ones.',
    },
    {
        icon: owners,
        title: 'Whitelist for owners of Seqchain NFT Alpha Gen',
        body: 'The owners of the first thousand Seqchain NFT tokens will always have access to all pre-sales of the Seqchain project and an eternal Whitelist to all the projects of our team.',
    },
    {
        icon: leaf,
        title: 'Evergreen Giant Tree Sequoia',
        body: 'The owner writes his name in history, as the tree will live for thousands of years. You will be able to pass on your tree from generation to generation. Moreover, you’ll be able to touch it.',
    },
    {
        icon: game,
        title: 'Advantages in P2E & F2P game',
        body: 'Seqchain NFT holders will enjoy benefits in play2earn & free2play game. Game mechanics & Storytelling is in progress. We will share the progress with our community in groups and channels. The release of the game`s WhitePaper is planned for the third quarter of 2022. So, stay with us!',
    },
    {
        icon: land,
        title: '20x20 meters plot of land ',
        body: 'The Seqchain NFT owner owns the real tree and the land it’s located on. The plot area is 400 square meters. This is the optimal area for the future giant tree. What a giant!',
    },
]

const Utility = () => {
    return (
        <div id="utility" className="utility">
            <h2>Seqchain NFT BENEFITS</h2>
            <div className="carousel">
                <Swiper
                    mousewheel={{ forceToAxis: true }}
                    modules={[Scrollbar]}
                    slidesPerView={'auto'}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    slidesOffsetAfter={20}
                    allowTouchMove={true}
                    direction={'horizontal'}
                    mousewheel={true}
                    breakpoints={{
                        [LAPTOP_BREAKPOINT]: {
                            slidesOffsetAfter: 180
                        }
                    }}
                    >
                        {slides.map((slide, idx) => (
                            <SwiperSlide key={idx}>
                                <div data-text={slide.text} className="card">
                                    <slide.icon/>
                                    <h4>{slide.title}</h4>
                                    <p>{slide.body}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Utility