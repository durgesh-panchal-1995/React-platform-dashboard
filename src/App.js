// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Overview from "./views/Overview";
import Sales from "./views/Sales";
import Users from "./views/Users";
import Orders from "./views/Orders";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;