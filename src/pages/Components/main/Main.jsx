import React from "react";
// import Layout from "../../../layout/Layout";
import { Routes, Route } from "react-router-dom";
import Settings from "../settings/Settings";
import "../../Components/Component.css";
const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="block">
          <Routes>
            <Route path="/" element={Main} />
            <Route path="/home" element={<Main />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <h1>Home</h1>
        </div>
      </div>
    </main>
  );
};

export default Main;
