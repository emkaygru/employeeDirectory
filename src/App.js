import React, { useState, useEffect } from "react";
import SiteHeader from "./components/SiteHeader";
import UserTable from "./pages/userTable";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <UserTable />
    </div>
  );
}

export default App;
