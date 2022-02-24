/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
import {networks} from "../config/networks";

export const setupNetwork = async (chainId) => {
    const provider = window.ethereum
    if (provider) {
        try {
            await provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                    chainId: `0x${chainId.toString(16)}`,
                }]
            })
            return true
        } catch (error) {
            if (error.code === 4902) {
                try {
                    await provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [networks[chainId]],
                    })
                    return true
                } catch (error) {
                    console.error(error)
                    return false
                }
            } else {
                console.error(error)
                return false
            }
        }
    } else {
        console.error("Can't setup network. Try again later!")
        return false
    }
}

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @param tokenImage
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (
    tokenAddress,
    tokenSymbol,
    tokenDecimals,
    tokenImage
) => {
    const provider = window.ethereum
    let tokenAdded
    if (provider) {
        tokenAdded = await provider.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenAddress,
                    symbol: tokenSymbol,
                    decimals: tokenDecimals,
                    image: tokenImage,
                },
            },
        })
    }

    return tokenAdded
}
