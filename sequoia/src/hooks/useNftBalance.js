import {BigNumber} from "ethers";
import {useCallback, useEffect, useMemo, useState} from "react";
import useBlockNumber from "./useBlockNumber";
import useActiveWeb3React from "./useActiveWeb3React";
import {useMulticallContract} from "./useContract";

export function useNftBalance(contract) {
    const multicallContract = useMulticallContract()
    const blockNumber = useBlockNumber()
    const [balance, setBalance] = useState(0);
    const [nfts, setNfts] = useState([]);
    const {account} = useActiveWeb3React()
    // const account = '0x8EAF995E3CD60ffFC3C32c51A86f718471585B60'
    const getData = useCallback(() => {
        if (contract && account) {
            contract.balanceOf(account)
                .then((res) => {
                    setBalance(parseInt(res.toString()));
                })
                .catch((e) => {
                    console.log(e.message || e);
                })
        }
    }, [account, contract])

    useEffect(() => {
        getData()
    }, [getData, blockNumber])

    const tokenOfOwnerByIndexArgs = useMemo(() => {
        if (balance > 0 && account) {
            const ids = []
            for (let i = 0; i < balance; i++) {
                ids.push([account, i])
            }
            return ids
        }
        return []
    }, [account, balance])


    const tokenOfOwnerByIndexProps = useMemo(() => {
        if (tokenOfOwnerByIndexArgs.length > 0 && contract) {
            const encodes = []
            for (const tokenOfOwnerByIndexArg of tokenOfOwnerByIndexArgs) {
                const fragment = contract.interface.getFunction('tokenOfOwnerByIndex');
                const encodeFunctions = contract.interface.encodeFunctionData(fragment, tokenOfOwnerByIndexArg)
                encodes.push([contract.address, encodeFunctions])
            }
            return encodes
        }
        return []
    }, [contract, tokenOfOwnerByIndexArgs])

    useEffect(() => {
        if (multicallContract && tokenOfOwnerByIndexProps.length > 0 && contract) {
            multicallContract.aggregate(tokenOfOwnerByIndexProps)
                .then((res) => {
                    const resData = res[1]
                    const balanceData = resData.map((item) => {
                        return BigNumber.from(item).toString()
                    })
                    setNfts(balanceData)
                })
                .catch((e) => {
                    console.log('error', e.message || e);
                })
        } else {
            setNfts([])
        }
    }, [contract, multicallContract, tokenOfOwnerByIndexProps, blockNumber])

    return nfts
}