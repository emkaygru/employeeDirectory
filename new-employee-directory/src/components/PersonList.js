import React from "react";

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
