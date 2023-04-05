import React from "react";
import { Route, Routes } from "react-router-dom";
import Discover from "../Discover/Discover";
import Main from "../Main/Main";
import Settings from "../settings/Settings";
const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default Layout;
