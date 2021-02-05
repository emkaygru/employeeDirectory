import Axios from "axios";
import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=100");
  }
}
