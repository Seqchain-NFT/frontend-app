import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from "react-router-dom";
import App from './App'

import 'normalize.css'
import './index.scss'
import {getLibrary} from "./utils/web3React";
import {Web3ReactProvider} from '@web3-react/core';

ReactDOM.render(
    <HashRouter>

        <Web3ReactProvider getLibrary={getLibrary}>
            <App/>
        </Web3ReactProvider>
    </HashRouter>,
    document.getElementById('root')
)

