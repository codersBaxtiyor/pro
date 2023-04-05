import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css"

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="container">
        <h1 className="navbar-title">Online Education</h1>
        <div className="navigation">
          <Link className="nav-link" to="/home">Home</Link>
          <Link className="nav-link" to="/discover">
            Discover
          </Link>
          <Link className="nav-link">Message</Link>
          <Link className="nav-link">Help&Support</Link>
          <Link className="nav-link" to="/settings">Settings</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
