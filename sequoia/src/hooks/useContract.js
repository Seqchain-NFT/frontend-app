import {useMemo} from "react";
import {getContract} from "../utils/contracts";
import useActiveWeb3React from "./useActiveWeb3React";
import {
    SequoiaMarket_Abi, SeqchainSequoiaNFT_Abi, SequoiaMarketAddress, SequoiaNFTAddress
} from "../config/contracts";


export const useSequoiaNFTContract = () => {
    const {chainId, account, library} = useActiveWeb3React()
    return useMemo(() => {
        if (chainId && library) {
            return getContract(SeqchainSequoiaNFT_Abi, SequoiaNFTAddress[chainId], library, account || undefined)
        }
        return null
    }, [account, chainId, library])
}

export const useSequoiaMarketContract = () => {
    const {chainId, account, library} = useActiveWeb3React()
    return useMemo(() => {
        if (chainId && library) {
            return getContract(SequoiaMarket_Abi, SequoiaMarketAddress[chainId], library, account || undefined)
        }
        return null
    }, [account, chainId, library])
}