import Axios from "axios";
import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li key={person.id}>person.name</li>
        ))}
      </ul>
    );
  }
}
