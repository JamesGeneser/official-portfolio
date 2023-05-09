import React, { useState } from "react";
import { Nav } from "react-bootstrap";
const HomePortfolio = (currentPage, setCurrentPage) => {
  console.log(currentPage.currentPage);
  const HandlePageChange = (page) => {
    console.log(page);

    setCurrentPage(page);

    console.log(currentPage);
  };
  if (currentPage === "home") {
    return (
      <Nav className="me-auto">
        <Nav.Link
          className="nav-item"
          name="portfolio"
          href="portfolio"
          onClick={(e) => HandlePageChange(e.target.name)}
        >
          Portfolio
        </Nav.Link>
      </Nav>
    );
  } else if (currentPage === "portfolio") {
    return (
      <Nav>
        <Nav.Link
          to="home"
          className="nav-item"
          name="home"
          href="home"
          onClick={(e) => HandlePageChange(e.target.name)}
        >
          Home
        </Nav.Link>
      </Nav>
    );
  }
};

export default HomePortfolio;
