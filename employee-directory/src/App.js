import React, { useState, useEffect } from "react";
require("es6-promise").polyfill();
require("isomorph-fetch");
import Datatable from "./datatable";

function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch()
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

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
