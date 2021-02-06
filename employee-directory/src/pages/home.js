import React, { Component } from "react";
import API from "../utils/API";
import Home from "../components/Home";

class APIData extends Component {
  state = {
    firstName: "",
    lastName: "",
    names: [],
  };

  componentDidMount() {
    API.randomUser()
      .then((res) => res.this.setState({ names: res.data.message }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state);
    return <Home result={this.state.names} />;
  }
}

export default APIData;
