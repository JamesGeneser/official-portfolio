import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navigation />

        <Routes>
          <Route path="/official-portfolio" element={<Home />} />
          <Route path="/project/official-portfolio" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;