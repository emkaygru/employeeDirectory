import React, { useState, useEffect } from "react";
require("es6-promise").polyfill();
require("isomorph-fetch");
import Datatable from "./datatable";
import PersonList from ".components/PersonList";

function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch()
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function searchUsers(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  return (
    <div>
      <div>filter</div>
      <div>
        <Datatable data={data} />
      </div>
    </div>
  );
}

export default App;
