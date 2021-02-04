import React, { Component } from "react";
import NavBar from "./NavBar";
import CurrencyConverter from "./CurrencyConverter";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <CurrencyConverter />
      </React.Fragment>
    );
  }
}
