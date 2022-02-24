import {useWeb3React} from "@web3-react/core";
import {useEffect, useState} from "react";
import {simpleRpcProvider} from "../utils/contracts";

function useBlockNumber() {
    const [blockNumber, setBlockNumber] = useState(0);
    const {chainId} = useWeb3React()

    useEffect(() => {
        if (chainId) {
            let interval = setInterval(() => {
                simpleRpcProvider.getBlockNumber()
                    .then((res) => {
                        setBlockNumber(res)
                    })
                    .catch((e) => {
                        console.info(e.message || e)
                    })
            }, 18000)
            return () => {
                clearInterval(interval)
            }
        }
    }, [chainId, setBlockNumber])
    return blockNumber
}

export default useBlockNumber;