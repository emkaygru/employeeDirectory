import React, { useState, useEffect } from "react";
import SiteHeader from "./components/siteHeader.js";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <UserTable />
    </div>
  );
}

export default App;
