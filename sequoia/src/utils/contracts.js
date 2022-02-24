import {ethers} from "ethers"
import {ChainId, defaultChainId} from "../config";

export const nodes = {
    [ChainId.MAINNET]: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    [ChainId.TESTNET]: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
}
export const getNodeUrl = () => {
    return nodes[defaultChainId]
}

const RPC_URL = getNodeUrl();

// export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)
export const simpleRpcProvider = new ethers.providers.StaticJsonRpcProvider(RPC_URL)

// account is not optional
export function getSigner(library, account) {
    return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library, account) {
    return account ? getSigner(library, account) : library
}

// export const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider): Contract => {
export const getContract = (abi, address, library, account) => {
    if (address === "") return null
    const signerOrProvider = getProviderOrSigner(library, account)
    return new ethers.Contract(address, abi, signerOrProvider)
}