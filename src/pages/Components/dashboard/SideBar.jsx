import React from "react";
import { Link } from "react-router-dom";
import "../../Components/Component.css";
const sideBar = () => {
  return (
    <div className="side-bar">
      <div className="container">
        <div className="navigation">
          <Link className="side-bar-link" to="/home">
            Home
          </Link>
          <Link className="side-bar-link" to="/home">
            Posts
          </Link>
          <Link className="side-bar-link" to="/home">
            Videos
          </Link>
          <Link className="side-bar-link" to="/home">
            Lessons
          </Link>
          <Link className="side-bar-link" to="/home">
            Account
          </Link>
          <Link className="side-bar-link" to="/home">
            new lessons
          </Link>
          <Link className="side-bar-link" to="/home">
            new group
          </Link>
          <Link className="side-bar-link" to="/home">
            new content
          </Link>
          <Link className="side-bar-link" to="/settings">
            Settings
          </Link>
          <Link className="side-bar-link" to="/home">
            History
          </Link>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
