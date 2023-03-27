import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "../pages/Properties";
import AddProperty from "../pages/AddProperty";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={Properties()} />
        <Route path="/add-property" element={AddProperty()} />
      </Routes>
    </div>
  );
};

export default App;
