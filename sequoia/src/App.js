import {useContext, useEffect} from "react";
import {Routes, Route, useLocation} from "react-router-dom";

import {PopupContext} from "./context/PopupContext";

import Main from "./pages/Main/Main";
import Account from "./pages/Account/Account";

import Popups from "./components/Popups/Popups";

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CloseButton} from "./components/UI/Toast/Toast";

import renderer from './utils/renderer'
import {storageConnectorKey} from "./config";
import useAuth from "./hooks/useAuth";
import {ConnectorNames} from "./utils/web3React";
import Preloader from "./components/Preloader/Preloader";


const App = () => {
    const [showPopupName, setShowPopupName] = useContext(PopupContext) // чтобы отключить скролл
    const {login} = useAuth()
    const provider = localStorage.getItem(storageConnectorKey)
    useEffect(() => {
        if (provider) {
            login(provider || ConnectorNames.Injected)
        }
    }, [login])

    const {pathname} = useLocation()

    useEffect(() => {
        setShowPopupName('popup-preloader')
    }, [pathname, setShowPopupName])
    useEffect(() => {
        renderer.render()
        renderer.useMouseEvent()
    }, [])

    return (
        <div style={{overflow: 'hidden'}} className="App">
            <Preloader/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="profile" element={<Account/>}/>
            </Routes>
            <Popups/>
            <ToastContainer closeButton={CloseButton}/>
        </div>
    );
}

export default App;
