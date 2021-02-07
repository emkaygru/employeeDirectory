import React from "react";

class Nav extends Component {
  state = {
    query: "",
    filtered: [],
  };

  componentDidMount() {
    if (this.state.filtered.length < 1) {
      this.setState({
        filtered: this.props.employees,
      });
    }
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });

    let userInput = e.target.value;
    const filteredList = this.props.employees.filter((db) => {
      let values =
        db.name.title +
        db.name.first +
        db.name.last +
        db.gender +
        db.dob.age +
        db.email +
        db.cell;
      return values.indexOf(userInput) !== -1;
    });

    this.setState({ filtered: filteredList });
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            value={this.state.searchTerm}
            name="searchTerm"
            onChange={(event) => this.handleInputChange(event)}
            type="text"
            placeholder="Search"
          />
        </form>
        {this.state.filtered.length > 0 && (
          <ListHeader empList={this.state.filtered} />
        )}
      </div>
    );
  }
}

export default Nav;
