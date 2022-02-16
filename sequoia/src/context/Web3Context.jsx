import React, { useState } from "react";

// для теста верстки
const Web3Context = React.createContext()
const Web3ContextProvider = ({ children }) => {
    const [ isAuthorised, setIsAuthorised ] = useState(false)
    return (
        <Web3Context.Provider value={[ isAuthorised, setIsAuthorised ]}>
            { children }
        </Web3Context.Provider>
    )
}

export default Web3ContextProvider
export { Web3Context }