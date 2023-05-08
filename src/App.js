import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Project from "./components/pages/Project";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <>
      {/* <PortfolioContainer /> */}
      <Router>
        {/* <Header /> */}
        <Navigation />

        <Routes>
          <Route path="/official-portfolio/home" element={<Home />} />
          <Route path="/official-portfolio/portfolio" element={<Project />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
