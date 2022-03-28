import {
    useAlphaGenerationRegistryContract,
    useFarmContract,
    useMulticallContract,
    useSequoiaNFTContract
} from "./useContract";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useNftBalance} from "./useNftBalance";
import async from "async";
import {axiosInstance, handle} from "../api";
import {BN_0} from "../config";
import {onToast, ToastMessage} from "../components/UI/Toast/Toast";
import {shortAddress} from "../utils";
import useActiveWeb3React from "./useActiveWeb3React";

export function useFarm() {
    const {account} = useActiveWeb3React()
    const contract = useSequoiaNFTContract()
    const [status, setStatus] = useState([]);
    const [nftsRewards, setNftsRewards] = useState([]);
    const [emptyReward, setEmptyReward] = useState([]);
    const [rarities, setRarities] = useState([]);
    const [nftImages, setNftImages] = useState([]);
    const [rewardPerBlock, setRewardPerBlock] = useState([]);
    const multicallContract = useMulticallContract()
    const alphaGenerationRegistryContract = useAlphaGenerationRegistryContract()
    const farmContract = useFarmContract()
    const [pending, setPending] = useState(false);

    const nftsBalance = useNftBalance(contract)

    const nfts = useMemo(() => {
        return [...nftsBalance.sort((a, b) => parseInt(b) - parseInt(a) )]
    }, [nftsBalance])

    const getLastRewardProps = useMemo(() => {
        if (nfts.length > 0 && farmContract) {
            const encodes = []
            for (const nft of nfts) {
                const fragment = farmContract.interface.getFunction('lastReward');
                const encodeFunctions = farmContract.interface.encodeFunctionData(fragment, [nft])
                encodes.push([farmContract.address, encodeFunctions])
            }
            return encodes
        }
        return []
    }, [farmContract, nfts])

    useEffect(() => {
        if (multicallContract && getLastRewardProps.length > 0 && farmContract) {
            const fragment = farmContract.interface.getFunction('lastReward');
            multicallContract.aggregate(getLastRewardProps)
                .then((res) => {
                    const resData = res[1]
                    const statusData = resData.map((item) => {
                        const data = farmContract.interface.decodeFunctionResult(fragment, item)
                        return data[0].toString()
                    })
                    setStatus(statusData)
                })
                .catch((e) => {
                    console.log('error', e.message || e);
                })
        }
    }, [farmContract, multicallContract, nfts, getLastRewardProps])

    const getPendingRewardBatchProps = useMemo(() => {
        if (nfts.length > 0 && farmContract) {
            const encodes = []
            for (const nft of nfts) {
                const fragment = farmContract.interface.getFunction('pendingRewardBatch');
                const encodeFunctions = farmContract.interface.encodeFunctionData(fragment, [[nft]])
                encodes.push([farmContract.address, encodeFunctions])
            }
            return encodes
        }
        return []
    }, [farmContract, nfts])

    useEffect(() => {
        if (multicallContract && getPendingRewardBatchProps.length > 0 && farmContract && !pending) {
            const fragment = farmContract.interface.getFunction('pendingRewardBatch');
            multicallContract.aggregate(getPendingRewardBatchProps)
                .then((res) => {
                    const resData = res[1]
                    const rewards = resData.map((item) => {
                        const data = farmContract.interface.decodeFunctionResult(fragment, item)
                        return data[0]
                    })
                    const emptyRew = rewards.map(() => BN_0)
                    setEmptyReward(emptyRew)
                    setNftsRewards(rewards)
                })
                .catch((e) => {
                    console.log('error', e.message || e);
                })
        }
    }, [farmContract, multicallContract, nfts, getPendingRewardBatchProps, pending])

    const getRarityProps = useMemo(() => {
        if (nfts.length > 0 && alphaGenerationRegistryContract) {
            const encodes = []
            for (const nft of nfts) {
                const fragment = alphaGenerationRegistryContract.interface.getFunction('get');
                const encodeFunctions = alphaGenerationRegistryContract.interface.encodeFunctionData(fragment, [nft])
                encodes.push([alphaGenerationRegistryContract.address, encodeFunctions])
            }
            return encodes
        }
        return []
    }, [alphaGenerationRegistryContract, nfts])

    useEffect(() => {
        if (multicallContract && getRarityProps.length > 0 && alphaGenerationRegistryContract) {
            const fragment = alphaGenerationRegistryContract.interface.getFunction('get');
            multicallContract.aggregate(getRarityProps)
                .then((res) => {
                    const resData = res[1]
                    const items = resData.map((item) => {
                        const data = alphaGenerationRegistryContract.interface.decodeFunctionResult(fragment, item)
                        return data[0].rarity
                    })
                    setRarities(items)
                })
                .catch((e) => {
                    console.log('error', e.message || e);
                })
        }
    }, [alphaGenerationRegistryContract, multicallContract, nfts, getRarityProps])

    const getRewardsPerBlockProps = useMemo(() => {
        if (rarities.length > 0 && farmContract) {
            const encodes = []
            for (const rarity of rarities) {
                const fragment = farmContract.interface.getFunction('rewardsPerBlock');
                const encodeFunctions = farmContract.interface.encodeFunctionData(fragment, [rarity])
                encodes.push([farmContract.address, encodeFunctions])
            }
            return encodes
        }
        return []
    }, [farmContract, rarities])

    useEffect(() => {
        if (multicallContract && getRewardsPerBlockProps.length > 0 && farmContract) {
            const fragment = farmContract.interface.getFunction('rewardsPerBlock');
            multicallContract.aggregate(getRewardsPerBlockProps)
                .then((res) => {
                    const resData = res[1]
                    const rewards = resData.map((item) => {
                        const data = farmContract.interface.decodeFunctionResult(fragment, item)
                        return data[0]
                    })
                    setRewardPerBlock(rewards)
                })
                .catch((e) => {
                    console.log('error', e.message || e);
                })
        }
    }, [farmContract, multicallContract, nfts, getRewardsPerBlockProps])

    useEffect(() => {
        if (nfts.length > 0) {
            async.mapSeries(nfts, async nft => {
                const [res, err] = await handle(axiosInstance.get(nft))
                if (res !== undefined) {
                    return res['image']
                }
                if (err !== undefined) console.log(err);
                return ''
            }).then(images => {
                setNftImages(images);
            })
        }
    }, [nfts])

    const nftsData = useMemo(() => {
        return nfts.map((nft, id) => {
            return {
                id: nft,
                image: nftImages[id] || '',
                status: status[id] || '',
                reward: nftsRewards[id] || BN_0,
                rarity: rarities[id] || '0',
                rewardPerBlock: rewardPerBlock[id] || BN_0,
            }
        })
    }, [nftImages, nfts, nftsRewards, rarities, rewardPerBlock, status])


    const onEnable = useCallback(() => {
        const nftsForEnable = nftsData.filter((nft) => nft.status === '0').map((nft) => nft.id)
        if (farmContract && nftsForEnable.length > 0) {
            setPending(true)
            farmContract.enable(nftsForEnable, {from: account})
                .then(async (res) => {
                    const result = await res.wait()
                    onToast(
                        <ToastMessage title={'Enable NFT!'}
                                      text={`Enable NFTs ${nftsForEnable.join(', ')} ${result.status === 1 ? 'Success' : 'Failed'} ${shortAddress(res.hash)}`}/>, result.status === 1 ? 'success' : 'error')
                })
                .catch((e) => {
                    console.log(e)
                    onToast(<ToastMessage title={'Enable NFT!'} text={`Something went wrong!`}/>, 'error')
                })
                .finally(() => {
                    setPending(false)
                })
        }
    }, [account, farmContract, nftsData])

    const onClaim = useCallback(() => {
        const nftsForClaim = nftsData.filter((nft) => nft.status !== '0').map((nft) => nft.id)
        if (farmContract && nftsForClaim.length > 0) {
            setPending(true)
            setNftsRewards(emptyReward)
            farmContract.earnBatch(nftsForClaim, {from: account})
                .then(async (res) => {
                    const result = await res.wait()
                    onToast(
                        <ToastMessage title={'Claim NFT!'}
                                      text={`Claim NFTs ${nftsForClaim.join(', ')} ${result.status === 1 ? 'Success' : 'Failed'} ${shortAddress(res.hash)}`}/>, result.status === 1 ? 'success' : 'error')
                })
                .catch((e) => {
                    console.log(e)
                    onToast(<ToastMessage title={'Claim NFT!'} text={`Something went wrong!`}/>, 'error')
                })
                .finally(() => {
                    setPending(false)
                })
        }
    }, [account, farmContract, nftsData, emptyReward])

    return useMemo(() => {
        return {
            nftsData,
            onEnable,
            onClaim, pending
        }
    }, [nftsData, onEnable, onClaim, pending])
}