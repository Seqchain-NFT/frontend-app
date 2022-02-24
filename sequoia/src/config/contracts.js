import {ChainId} from "./index";
import SeqchainSequoiaNFT_Abi from './abi/SeqchainSequoiaNFT.json'
import SequoiaMarket_Abi from './abi/SequoiaMarket.json'

const SequoiaNFTAddress = {
    [ChainId.MAINNET]: '',
    [ChainId.TESTNET]: '0x00212d4b6c65d9dAe997d543ab77f1C96571D2fe'
}

const SequoiaMarketAddress = {
    [ChainId.MAINNET]: '',
    [ChainId.TESTNET]: '0x964094a42B6a077cd7C58bA4e90F669173c1cD0A'
}

export {
    SequoiaNFTAddress, SequoiaMarketAddress, SequoiaMarket_Abi, SeqchainSequoiaNFT_Abi
}