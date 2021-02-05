import Axios from "axios";
import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=100").then((res) => {
      this.setState({ persons: res.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((persons) => (
          <li>person.name</li>
        ))}
      </ul>
    );
  }
}
