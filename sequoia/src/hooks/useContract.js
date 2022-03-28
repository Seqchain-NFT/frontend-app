import {useMemo} from "react";
import {getContract} from "../utils/contracts";
import useActiveWeb3React from "./useActiveWeb3React";
import {
    SequoiaMarket_Abi,
    SeqchainSequoiaNFT_Abi,
    SequoiaMarketAddress,
    SequoiaNFTAddress,
    FarmAddress,
    Farm_Abi,
    Multicall_Abi, MulticallAddress, AlphaGenerationRegistry_Abi, AlphaGenerationRegistryAddress
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

export const useFarmContract = () => {
    const {chainId, account, library} = useActiveWeb3React()
    return useMemo(() => {
        if (chainId && library) {
            return getContract(Farm_Abi, FarmAddress[chainId], library, account || undefined)
        }
        return null
    }, [account, chainId, library])
}

export const useMulticallContract = () => {
    const {chainId, account, library} = useActiveWeb3React()
    return useMemo(() => {
        if (chainId && library) {
            return getContract(Multicall_Abi, MulticallAddress[chainId], library, account || undefined)
        }
        return null
    }, [account, chainId, library])
}

export const useAlphaGenerationRegistryContract = () => {
    const {chainId, account, library} = useActiveWeb3React()
    return useMemo(() => {
        if (chainId && library) {
            return getContract(AlphaGenerationRegistry_Abi, AlphaGenerationRegistryAddress[chainId], library, account || undefined)
        }
        return null
    }, [account, chainId, library])
}