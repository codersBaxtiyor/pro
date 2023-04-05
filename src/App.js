import React from "react";
import { Link } from "react-router-dom";
import img from "./Components/imgs/islamic.png";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/Side-Bar";
import Main from "./Components/Main/Main";
import Discover from "./Components/Discover/Discover";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <SideBar />
        <Layout/>
          
      </div>
    </>
  );
}

export default App;
