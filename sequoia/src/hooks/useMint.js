import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useSequoiaMarketContract} from "./useContract";
import whitelist from '../data/whitelist.json'
import useActiveWeb3React from "./useActiveWeb3React";
import useBlockNumber from "./useBlockNumber";
import {BigNumber} from "ethers";
import {BN_0} from "../config";
import {onToast, ToastMessage} from "../components/UI/Toast/Toast";
import {shortAddress} from "../utils";
import keccak256 from "keccak256";
import {MerkleTree} from "merkletreejs";

export const ESaleStatus = {
    Enable: 0,
    PreSale: 1,
    Sale: 2
}
export default function useMint() {
    const marketContract = useSequoiaMarketContract()

    const [balance, setBalance] = useState(BN_0);
    const [maxTokenPurchase, setMaxTokenPurchase] = useState(0);
    const [price, setPrice] = useState(BN_0);
    const [status, setStatus] = useState(ESaleStatus.Enable);

    const {account, library} = useActiveWeb3React()
    const blockNumber = useBlockNumber()

    const [pending, setPending] = useState(false);
    const getData = useCallback(() => {
        if (account && library) {
            library.getBalance(account)
                .then((res) => {
                    setBalance(res);
                })
                .catch((e) => {
                    console.log(e.message || e);
                })
        }
        if (marketContract) {
            marketContract.maxTokenPurchase()
                .then((res) => {
                    setMaxTokenPurchase(res.toNumber())
                })
                .catch((e) => {
                    console.log(e);
                })
            marketContract.price()
                .then((res) => {
                    setPrice(res)
                })
                .catch((e) => {
                    console.log(e);
                })
            marketContract.status()
                .then((res) => {
                    setStatus(res)
                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }, [account, library, marketContract])

    useEffect(() => {
        getData()
    }, [getData, blockNumber])

    const proof = useMemo(() => {
        const leaves = whitelist.map(v => keccak256(v))
        const tree = new MerkleTree(leaves, keccak256, { sort: true })
        const leaf = keccak256(account)
        return tree.getHexProof(leaf)
    }, [account])


    const onMintPreSale = useCallback((amount) => {
        setPending(true)
        if (marketContract) {
            const value = price.mul(BigNumber.from(amount))
            console.log('presale')
            marketContract.mintPresale(amount, proof, {value: value.toString(), from: account})
                .then(async (res) => {const result = await res.wait()
                    onToast(<ToastMessage title={'Mint NFT!'}
                                          text={`PreSale mint ${amount} ${result.status === 1 ? 'Success' : 'Failed'} ${shortAddress(res.hash)}`}/>, result.status === 1  ?'success' : 'error')
                })
                .catch((e) => {
                    console.log(e)
                    onToast(<ToastMessage title={'Mint NFT!'} text={`Something went wrong!`}/>, 'error')
                })
                .finally(() => {
                    setPending(false)
                })
        } else {
            setPending(false)
        }
    }, [account, marketContract, price, proof])


    const onMint = useCallback((amount) => {
        setPending(true)
        if (marketContract) {
            const value = price.mul(BigNumber.from(amount))
            return marketContract.mint(amount, {value: value.toString(), from: account})
                .then(async (res) => {
                    const result = await res.wait()
                    onToast(<ToastMessage title={'Mint NFT!'}
                                          text={`Sale mint ${amount} ${result.status === 1 ? 'Success' : 'Failed'} ${shortAddress(res.hash)}`}/>, result.status === 1  ?'success' : 'error')
                })
                .catch((e) => {
                    console.log(e)
                    onToast(<ToastMessage title={'Mint NFT!'} text={`Something went wrong!`}/>, 'error')
                })
                .finally(() => {
                    setPending(false)
                })
        } else {
            setPending(false)
        }
    }, [account, marketContract, price])

    const mint = useCallback((amount) => {
        if (status === ESaleStatus.Sale) {
            onMint(amount.toString())
        } else if (status === ESaleStatus.PreSale) {
            onMintPreSale(amount.toString())
        }
    }, [status, onMint, onMintPreSale])

    return useMemo(() => {
        return {
            maxTokenPurchase, status, price, pending, balance, mint
        }
    }, [maxTokenPurchase, status, price, pending, balance, mint])
}