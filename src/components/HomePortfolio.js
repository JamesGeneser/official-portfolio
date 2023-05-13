import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
const HomePortfolio = () => {
  console.log(window.location.pathname);
  let location = window.location.pathname;

  if (location === "/official-portfolio/home") {
    return (
      <Nav>
        <Nav.Link className="navElement" name="portfolio" href="portfolio">
          Portfolio
        </Nav.Link>
      </Nav>
    );
  } else if (location === "/official-portfolio/portfolio") {
    return (
      <Nav>
        <Nav.Link className="navElement" name="home" href="home">
          Home
        </Nav.Link>
      </Nav>
    );
  }
};

export default HomePortfolio;
