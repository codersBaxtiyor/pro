import React from "react";
import "./Main.css";
import Progress from "../Progress/Progress";
import Popular from "../Popular/Popular";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="block">
          <Progress />
          <Popular />
          
        </div>
      </div>
    </main>
  );
};

export default Main;
