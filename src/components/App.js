import React, {Component} from "react";
import SongsTable from "./SongsTable";
import FilterWrapper from "./FilterWrapper";
import logo from "../data/logo.svg";
import connect from "../util/connect";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <FilterWrapper {...this.props}/>
          <SongsTable {...this.props} />
      </div>
    );
  }
}

export default connect(App);
