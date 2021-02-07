import React, { useEffect, useState } from 'react';
import API from "../utils/API";
// import SiteHeader from "./components/SiteHeader";
import SubmitButton from "../components/SubmitButton.js";

const UserTable = () => {
  const [employee, setEmployee] = useState([]);
  const [originalEmployee, setOriginalEmployee] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    showUsers();
  }, []);

  function showUsers() {
    API.randomUser()
      .then((res) => {
        setEmployee(res.data.results);
        setOriginalEmployee(res.data.results);
      })
      .catch((err) => console.error(err));
  }

  function handleInputChange(e) {
    const { value } = e.target;
    setSearchTerm(value);
    const newEmployee = originalEmployee.filter((person) => {
      return person.name.first.toLowerCase().includes(value.toLowerCase());
    });
    setEmployee(newEmployee);
  }

  function handleSubmit() {
    //alert('button clicked...mothafu')

    const sortedEmployee = employee.sort((a, b) => {
      return a.name.first.localCompare(b.name.first);
    });
    const newEmployee = employee.filter((person) => {
      return true;
    });
    setEmployee(newEmployee);
  }

  return (
    <div style={{ background: " #252525" }} >
     <input className="mt-5 mb-5 align-items-center" onChange={ handleInputChange } value= {searchTerm} /><SubmitButton handleSubmit={handleSubmit}/>
      
      <table
        className="container table text-center"
        style={{ color: "#e8e8e8" }}
      >
        <thead>
          <tr>
            <th>Icon</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {console.log(employee)}
          {employee[0] !== undefined && employee[0].name !== undefined ? (
            employee.map(({ picture, email, name, location }) => {
              return (
                <tr>
                   <img
              src={picture.thumbnail} className="img-fluid m-5 pb-5"/>
                  <td className="m-5 p-5">{name.first}</td>
                  <td className="m-5 p-5">{name.last}</td>
                  <td className="m-5 p-5">{email}</td>
                  <td className="m-5 p-5">{location.country}</td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
