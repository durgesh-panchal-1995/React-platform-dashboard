// src/components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Reports</h2>
      </div>
      <nav className="sidebar-menu">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link ")}
        >
          Overview
        </NavLink>
        <NavLink
          to="/sales"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Sales
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Users
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Orders
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;