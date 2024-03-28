import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

import {Provider} from "react-redux";
import './app/style/style.css';
import {store} from "./app/store/createStore";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
