import React, { useState, useEffect } from "react";

const PopupContext = React.createContext()

const PopupContextProvider = ({ children }) => {
    const [ showPopupName, setShowPopupName ] = useState('')

    function preventScroll(boolean) {
      if (boolean) {
        document.querySelector('html').classList.add('prevent-scroll')
        document.querySelector('body').classList.add('prevent-scroll')
      } else {
        document.querySelector('html').classList.remove('prevent-scroll')
        document.querySelector('body').classList.remove('prevent-scroll')
      }
    }

    useEffect(() => {
      if (showPopupName === '') {
          preventScroll(false)
          return
      }
      preventScroll(true)
    }, [showPopupName])

    return (
        <PopupContext.Provider value={[ showPopupName, setShowPopupName]}>
            { children }
        </PopupContext.Provider>
    )
}

export default PopupContextProvider
export { PopupContext }