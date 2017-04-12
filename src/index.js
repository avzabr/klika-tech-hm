import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import store from "./store";
import { Provider } from "react-redux";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import "./index.css";

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);
