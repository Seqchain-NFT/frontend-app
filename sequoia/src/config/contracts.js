import {ChainId} from "./index";
import SeqchainSequoiaNFT_Abi from './abi/SeqchainSequoiaNFT.json'
import SequoiaMarket_Abi from './abi/SequoiaMarket.json'
import AlphaGenerationRegistry_Abi from './abi/AlphaGenerationRegistryAbi.json'
import Farm_Abi from './abi/FarmAbi.json'
import Multicall_Abi from './abi/Multicall.json'

const SequoiaNFTAddress = {
    [ChainId.MAINNET]: '',
    [ChainId.TESTNET]: '0x3358D1FbA958ceE051a16d5A3Db9a898930B81aC'
}

const SequoiaMarketAddress = {
    [ChainId.MAINNET]: '',
    [ChainId.TESTNET]: '0x2FF7daD560B30ABA75183fCC8411bDa31da12BDD'
}

const AlphaGenerationRegistryAddress = {
    [ChainId.MAINNET]: '',
    [ChainId.TESTNET]: '0x743B06f7f30D81Afd13E2EE2A49383240a3Ac8CC'
}

const SeqchainTokenAddress = {
    [ChainId.MAINNET]: '',
    [ChainId.TESTNET]: '0xB80e1df0Fa6D5Efa370Af76E9542fEaeC8034553'
}

const FarmAddress = {
    [ChainId.MAINNET]: '',
    [ChainId.TESTNET]: '0xA7f505Bb529F2F05058D5Cf57315043202b9C8c3'
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