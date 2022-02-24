import {UnsupportedChainIdError, useWeb3React} from "@web3-react/core";
import React, {useCallback} from "react";
import {defaultChainId, storageConnectorKey} from "../config";
import {ConnectorNames, connectorsByName} from "../utils/web3React";
import {setupNetwork} from "../utils/wallet";
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
    UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
    WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import {onToast, ToastMessage} from "../components/UI/Toast/Toast";

function useAuth() {
    const {activate, deactivate, chainId} = useWeb3React()
    const defaultConnectorKey = window.localStorage.getItem(storageConnectorKey) || ConnectorNames.Injected

    const login = useCallback( async (connectorKey = defaultConnectorKey) => {
        const connector = connectorsByName[connectorKey]
        let success = true
        if (connector) {
            console.log(connector)
            activate(connector, async (error) => {
                console.log(error.message || error )
                success = false
                localStorage.removeItem(storageConnectorKey)
                if (error instanceof UnsupportedChainIdError) {
                    if (connectorKey === ConnectorNames.WalletConnect) {
                        window.localStorage.removeItem('walletconnect')
                        console.error('Unsupported ChainId. Change network, please!')
                        onToast(<ToastMessage title={'Connect wallet!'} text={'Unsupported ChainId. Change network, please!'}/>, 'error')
                        return
                    }
                    const hasSetup = await setupNetwork(defaultChainId)
                    if (hasSetup) {
                        await activate(connector)
                        localStorage.setItem(storageConnectorKey, connectorKey)
                        console.error('Change Network: Success')
                        success = true
                        onToast(<ToastMessage title={'Connect wallet!'} text={'Change Network: Success'}/>, 'success')
                        // showAlert({text: 'Change Network: Success', cls: classAlert.success})
                    } else {
                        deactivate();
                        console.log(error.message)
                        window.localStorage.removeItem(storageConnectorKey)
                        onToast(<ToastMessage title={'Connect wallet!'} text={error.message}/>, 'error')
                        if (chainId === undefined) {
                            return false
                        }
                    }
                } else {
                    deactivate();
                    window.localStorage.removeItem(storageConnectorKey)
                    window.localStorage.removeItem('walletconnect')
                    if (error instanceof NoEthereumProviderError) {
                        console.info(error.message || 'Provider Error')
                    } else if (
                        error instanceof UserRejectedRequestErrorInjected ||
                        error instanceof UserRejectedRequestErrorWalletConnect
                    ) {
                        if (connector instanceof WalletConnectConnector) {
                            connector.walletConnectProvider = null
                        }
                        console.error(error.message || 'Authorization Error')
                        onToast(<ToastMessage title={'Connect wallet!'} text={error.message || 'Authorization Error'}/>, 'error')
                    } else {
                        console.error(error.message)
                        window.localStorage.removeItem(storageConnectorKey)
                        onToast(<ToastMessage title={'Connect wallet!'} text={error.message}/>, 'error')
                    }
                }
            }).then(() => {
                if (success) {
                    localStorage.setItem(storageConnectorKey, connectorKey)
                }
            })
                .catch(() => {
                    window.localStorage.removeItem(storageConnectorKey)
                })
        } else {
            console.info('Connector is Failed')
        }
    }, [activate, chainId, deactivate, defaultConnectorKey])

    const logout = useCallback(() => {
        window.localStorage.removeItem(storageConnectorKey)
        deactivate();
        window.localStorage.removeItem(storageConnectorKey)
        window.localStorage.removeItem('walletconnect')
    }, [deactivate])

    return {
        login,
        logout
    }
}

export default useAuth;