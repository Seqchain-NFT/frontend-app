import './TokensList.scss'
import {ButtonOutlinePrimary} from '../../../components/UI/Button/Button'
import Label from '../../../components/UI/Label/Label'
import {useFarm} from "../../../hooks/useFarm";
import {fromWei} from "web3-utils";
import {shortBalance} from "../../../utils";
import nftQueImage from './assets/nft-que.png'
import React, {useCallback, useMemo, useState} from "react";
import useActiveWeb3React from "../../../hooks/useActiveWeb3React";
import {ReactComponent as ChevronLeft} from '../../../assets/chevron-left.svg'
import {ReactComponent as ChevronRight} from '../../../assets/chevron-right.svg'
import Loader from "../../../components/UI/Loader/Loader";
import TokenReveal from "./TokenReveal";

const isReveal = false

const Token = ({nft}) => {
    return (
        <div className={'token'}>
            <div className="token__number">#{nft.id}</div>
            <img src={nft.image || nftQueImage} alt={`nft ${nft.id}`}/>
            <div className="token__rarity">
                <Label rarity={nft.rarity}>{nft.rarity}</Label>
                <p className="subtitle">{'This nft generate:'}</p>
                <p className="generate">{`${shortBalance(fromWei(nft.rewardPerBlock.toString()))} seq/day`}</p>
            </div>
            <div className="token__claim">
                {
                    nft.status === '0'
                        ? <p className="subtitle">NFT Disabled</p>
                        : <>
                            <p className="subtitle">waiting for claim:</p>
                            <p className="claim">{shortBalance(fromWei(nft.reward.toString())) || 0}</p>
                        </>
                }
            </div>
        </div>
    )
}
const TokensList = () => {
    const {account} = useActiveWeb3React()

    const {nftsData, onEnable, onClaim, pending} = useFarm()
    const [currentPage, setCurrentPage] = useState(0);

    const pages = useMemo(() => {
        const count = Math.ceil(nftsData.length / 10)
        const p = []
        for (let i = 0; i < count; i++) {
            p.push(i)
        }
        return p
    }, [nftsData])

    const onClickHandler = useCallback(() => {
        if (nftsData.filter((nft) => nft.status === '0').length > 0) {
            onEnable()
        } else {
            onClaim()
        }
    }, [nftsData, onClaim, onEnable])

    const buttonText = useMemo(() => {
        return nftsData.length === 0 ? 'No NFT'
            : nftsData.filter((nft) => nft.status === '0').length === 0 ? "CLAIM ALL TOKENS" : "ENABLE FARMING"
    }, [nftsData])

    return (
        <div className="tokens-list">
            <div className="tokens-list__header">
                <div className="tokens-list__header-title">
                    <h1>Profile</h1>
                    <h2>Your NFT’s</h2>
                </div>
                <ButtonOutlinePrimary onClick={onClickHandler}
                                      disabled={isReveal || (!account || nftsData.length === 0)}>
                    {pending ? <Loader name={'preloader-loader'}
                                       style={{
                                           width: '2rem',
                                           height: '2rem',
                                           transform: 'scale(5)'
                                       }}/> : buttonText}</ButtonOutlinePrimary>
            </div>
            <div className="tokens-list__tokens">
                {/*{*/}
                {/*    nftsData.length === 0 &&*/}
                {/*    <TokenReveal rarity={'que'} claimTitle="reaveal in" claim="3 days" id={'?'}/>*/}
                {/*}*/}
                {nftsData.slice(currentPage * 10, (currentPage * 10 + 10)).map((token) => (
                    isReveal ? <TokenReveal id={token.id} rarity={'que'} claimTitle="reaveal in" claim="3 days"/> :
                        <Token key={token.id} nft={token}/>
                ))}
            </div>
            {
                nftsData.length > 10 &&
                <div className="pagination">
                    {
                        currentPage !== 0 &&
                        <div onClick={() => setCurrentPage(prevState => prevState - 1)}
                             className={["page"].join(' ')}>
                            <ChevronLeft height={16}/>
                        </div>
                    }
                    {
                        pages.map((page) => {
                            return (
                                <div key={`Page-${page}`} onClick={() => setCurrentPage(page)}
                                     className={["page", page === currentPage ? 'active' : ''].join(' ')}>
                                    <span>{page + 1}</span>
                                </div>
                            )
                        })
                    }

                    {
                        currentPage !== Math.floor(nftsData.length / 10) &&
                        <div onClick={() => setCurrentPage(prevState => prevState + 1)}
                             className={["page"].join(' ')}>
                            <ChevronRight height={16}/>
                        </div>
                    }
                </div>
            }

        </div>
    )
}

export default TokensList