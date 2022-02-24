import {nodes} from "../utils/contracts";
import {ChainId} from './index'

const networks = {
    [ChainId.MAINNET]: {
        chainId: `0x${(ChainId.MAINNET).toString(16)}`,
        chainName: 'Сеть Ethereum Mainnet',
        nativeCurrency: {
            decimals: 18,
            symbol: 'ETH',
            name: 'Etherium'
        },
        rpcUrls: nodes[ChainId.MAINNET],
        blockExplorerUrls: ['https://etherscan.io'],
    },
    [ChainId.TESTNET]: {
        chainId: `0x${(ChainId.TESTNET).toString(16)}`,
        chainName: 'Сеть Ethereum Rinkeby',
        nativeCurrency: {
            decimals: 18,
            symbol: 'ETH',
            name: 'Etherium'
        },
        rpcUrls: nodes[ChainId.TESTNET],
        blockExplorerUrls: ['https://rinkeby.etherscan.io'],
    },
}

export {networks}