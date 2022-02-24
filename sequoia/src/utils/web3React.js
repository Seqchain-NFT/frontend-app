import {InjectedConnector} from '@web3-react/injected-connector'
import {defaultChainId} from "../config";
import { BscConnector } from '@binance-chain/bsc-connector'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'
import {getNodeUrl} from "./contracts";
import {ethers} from "ethers";
import {MathWalletConnector} from "@harmony-react/mathwallet-connector";

const POLLING_INTERVAL = 12000

export const ConnectorNames = {
    Injected: "injected",
    WalletConnect: "walletconnect",
    BSC: "bsc",
    MathWallet: "mathwallet",
}

const injected = new InjectedConnector({ supportedChainIds: [defaultChainId] })

const bscConnector = new BscConnector({ supportedChainIds: [56, 97] })

const walletconnect = new WalletConnectConnector({
    rpc: {[defaultChainId]: getNodeUrl()},
    qrcode: true,
})

const mathwallet = new MathWalletConnector({ chainId: defaultChainId })

export const connectorsByName = {
    [ConnectorNames.Injected]: injected,
    [ConnectorNames.BSC]: bscConnector,
    [ConnectorNames.WalletConnect]: walletconnect,
    [ConnectorNames.MathWallet]: mathwallet,
}

export const getLibrary = (provider) => {
    const library = new ethers.providers.Web3Provider(provider)
    library.pollingInterval = POLLING_INTERVAL
    return library
}