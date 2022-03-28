import {ChainId} from "./index";
import SeqchainSequoiaNFT_Abi from './abi/SeqchainSequoiaNFT.json'
import SequoiaMarket_Abi from './abi/SequoiaMarket.json'
import AlphaGenerationRegistry_Abi from './abi/AlphaGenerationRegistryAbi.json'
import Farm_Abi from './abi/FarmAbi.json'
import Multicall_Abi from './abi/Multicall.json'

const SequoiaNFTAddress = {
    [ChainId.MAINNET]: '',
    [ChainId.TESTNET]: '0x00212d4b6c65d9dAe997d543ab77f1C96571D2fe'
}

const SequoiaMarketAddress = {
    [ChainId.MAINNET]: '',
    [ChainId.TESTNET]: '0x964094a42B6a077cd7C58bA4e90F669173c1cD0A'
}

const AlphaGenerationRegistryAddress = {
    [ChainId.MAINNET]: '',
    [ChainId.TESTNET]: '0x743B06f7f30D81Afd13E2EE2A49383240a3Ac8CC'
}

const SeqchainTokenAddress = {
    [ChainId.MAINNET]: '',
    [ChainId.TESTNET]: '0x96c9DE3e56D8A63F0a9422c643082643545E58B0'
}

const FarmAddress = {
    [ChainId.MAINNET]: '',
    [ChainId.TESTNET]: '0xbeb1a1604ccf196366b3FB2e6f964758b5eE5271'
}

const MulticallAddress = {
    [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
    [ChainId.TESTNET]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
}

export {
    SequoiaNFTAddress,
    SequoiaMarketAddress,
    SequoiaMarket_Abi,
    SeqchainSequoiaNFT_Abi,
    FarmAddress,
    AlphaGenerationRegistryAddress,
    AlphaGenerationRegistry_Abi,
    SeqchainTokenAddress,
    Farm_Abi,
    Multicall_Abi,
    MulticallAddress
}