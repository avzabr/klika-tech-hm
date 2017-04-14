import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store";
import {Provider} from "react-redux";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "react-bootstrap-table/css/react-bootstrap-table.css";
import "./index.css";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
