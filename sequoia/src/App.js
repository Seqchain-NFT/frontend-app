import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import PopupContextProvider from "./context/PopupContext";
import Web3ContextProvider from "./context/Web3Context";

import Main from "./pages/Main/Main";
import Account from "./pages/Account/Account";

import Popups from "./components/Popups/Popups";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CloseButton } from "./components/UI/Toast/Toast";

import renderer from './utils/renderer'

import Preloader from "./components/Preloader/Preloader";


const App = () => {
  useEffect(() => {
    renderer.render()
    renderer.useMouseEvent()
  }, [])

  return (
    <Web3ContextProvider>
      <PopupContextProvider>
        <div style={{overflow: 'hidden'}} className="App">
          <Routes>
            <Route path="/" element={ <Main/> } />
            <Route path="profile" element={ <Account/> } />
          </Routes>
          <Popups/>
          <ToastContainer closeButton={CloseButton}/>
          <Preloader/>
        </div>
      </PopupContextProvider>
    </Web3ContextProvider>
  );
}

export default App;
