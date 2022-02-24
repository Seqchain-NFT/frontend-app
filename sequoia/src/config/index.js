import { BigNumber } from 'ethers'
const ChainId = {
    MAINNET: 1,
    TESTNET: 4,
}

/*
enum StatusSale {
    disable,
    presale,
    sale
}
*/

const timesptamps = [
    1637409600000,
    1637442000000,
    0
]

const url_scan = {
    [ChainId.MAINNET]: 'https://etherscan.io/',
    [ChainId.TESTNET]: 'https://rinkeby.etherscan.io/'
}

console.log(process.env.REACT_APP_CHAIN_ID)
const defaultChainId = process.env.REACT_APP_CHAIN_ID ? parseInt(process.env.REACT_APP_CHAIN_ID) : ChainId.TESTNET
// const defaultChainId = 4

const storageConnectorKey = 'seq_connector'
const BN_0 = BigNumber.from('0')
const MaxUint256 = BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");

export {
    ChainId, defaultChainId, storageConnectorKey, BN_0, timesptamps, url_scan, MaxUint256
}
