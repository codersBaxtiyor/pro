import React, { useState } from "react";
import img from "../imgs/islamic.png";
import { Link } from "react-router-dom";
import ClassToggle from "../Class/Class";
const Header = () => {
  function classFunc() {
    // setTogle
    
  }
  return (
    <header>
      <div className="container">
        <div className="menu" onClick={classFunc}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="center-menu">
          <div className="search-box">
            <span>
              <i className="fas fa-search"></i>
            </span>
            <input
              type="search"
              name=""
              id="search"
              placeholder="search courses"
            />
          </div>
          <div className="right-menu">
            <div className="create-btn">
              <Link className="create-link">
                <span>+</span> create
              </Link>
            </div>
            <div className="notificaton">
              <span>
                <i className="fas fa-bell"></i>
              </span>
            </div>
            <div className="user-menu">
              <div className="img">
                <img src={img} alt="" />
              </div>
              <div className="bottom-u-m">
                <span>Baxtiyor Qurbonnazarov</span>
                <span>level 3</span>
              </div>
              <span>
                <i className="bx bx-down-up"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
