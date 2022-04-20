import React from "react";
import nftQueImage from './assets/nft-que.png'
import Label from "../../../components/UI/Label/Label";

const TokenReveal = ({ rarity, claimTitle, claim, id }) => {
    return (
        <div className={rarity === 'que' ? 'token que' : 'token'}>
            <div className="token__number">#{id}</div>
            <img src={nftQueImage} alt="nft image" />
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
export default TokenReveal;