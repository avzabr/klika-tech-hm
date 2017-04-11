import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import {Provider} from "react-redux";
import "./index.css";


const provider = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(
    provider,
    document.getElementById('root')
);
