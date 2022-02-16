import './TokensList.scss'

import nftCommonImage from './assets/nft-common.png'
import nftEpicImage from './assets/nft-epic.png'
import nftLegendaryImage from './assets/nft-legendary.png'
import nftRareImage from './assets/nft-rare.png'
import nftQueImage from './assets/nft-que.png'


import { ButtonOutlinePrimary } from '../../../components/UI/Button/Button'
import Label from '../../../components/UI/Label/Label'

const tokens = [
    'rare', 'epic', 'legendary', 'common'
]

const TokensList = () => {
    const nftImages = {
        'common': nftCommonImage, 
        'legendary': nftLegendaryImage, 
        'epic': nftEpicImage, 
        'rare': nftRareImage, 
        'que': nftQueImage
    }

    const Token = ({ rarity, idx, claimTitle, claim }) => {
        return (
            <div className={rarity === 'que' ? 'token que' : 'token'}>
                <div className="token__number">#{ idx }</div>
                <img src={nftImages[rarity]} alt="nft image" />
                <div className="token__rarity">
                    <Label rarity={rarity}>{ rarity === 'que' ? '' : rarity }</Label>
                    <p className="subtitle">{rarity === 'que' ? '' :'This nft generate:'}</p>
                    <p className="generate">{rarity === 'que' ? '' : '25 seq/day'}</p>
                </div>
                <div className="token__claim">
                    <p className="subtitle">{ claimTitle || 'waiting for claim:'}</p>
                    <p className="claim">{ claim || 500 }</p>
                </div>
            </div>
        )
    }

    return (
        <div className="tokens-list">
            <div className="tokens-list__header">
                <div className="tokens-list__header-title">
                    <h1>Profile</h1>
                    <h2>Your NFT’s</h2>
                </div>
                <ButtonOutlinePrimary>Claim all tokens</ButtonOutlinePrimary>
            </div>
            <div className="tokens-list__tokens">
            <Token key={tokens.length + 1} rarity={'que'} idx={tokens.length + 1} claimTitle="reaveal in" claim="3 days"/>
                {tokens.map((token, idx) => (
                    <Token key={tokens.length - idx} rarity={token} idx={tokens.length - idx}/>
                ))}
            </div>
        </div>
    )
}

export default TokensList