import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Components/main/Main";
import Settings from "../pages/Components/settings/Settings";
const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default Layout;
