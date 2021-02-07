import React, { useState, useEffect } from "react";
require("es6-promise").polyfill();
require("isomorph-fetch");
import Datatable from "./datatable";
import PersonList from ".components/PersonList";
import axios from "axios";
import SiteHeader from ".components/siteHeader";

class App extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=100`).then((res) => {
      this.setState({ employees: res.data.results });
    });
  }

  render() {
    return (
      <div className="App">
        <SiteHeader />
        {this.state.employees.length > 0 && (
          <Nav employees={this.state.employees} />
        )}
      </div>
    );
  }
}

export default App;
