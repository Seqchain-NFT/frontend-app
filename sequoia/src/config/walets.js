import {ConnectorNames} from "../utils/web3React";
import { ReactComponent as MetamaskIcon } from '../assets/metamask.svg'
import { ReactComponent as BinanceIcon } from '../assets/binance.svg'
import { ReactComponent as MathIcon } from '../assets/math.svg'
import { ReactComponent as WalletIcon } from '../assets/wallet.svg'

export const wallets = [
    {
        title: 'Metamask',
        icon: <MetamaskIcon/>,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: 'WalletConnect',
        icon: <WalletIcon/>,
        connectorId: ConnectorNames.WalletConnect,
    },
    {
        title: 'Binance Chain Wallet',
        icon: <BinanceIcon/>,
        connectorId: ConnectorNames.BSC,
    },
    {
        title: 'Math Wallet',
        icon: <MathIcon/>,
        connectorId: ConnectorNames.MathWallet,
    },
]