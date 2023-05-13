import React, { useState, useEffect } from "react";
import HomePortfolio from "./HomePortfolio";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";
import Contact from "./modals/Contact";
import { useLocation, useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Resume from "./modals/Resume";

function Navigation() {
  return (
    <Nav justify className="nav justify-content-center">
      <Nav.Item className="portfolioNav">
        <HomePortfolio as />
      </Nav.Item>

      <Contact />

      <Image
        className="logo"
        src={require("../components/images/profileLogo.png")}
      ></Image>
      <Resume />
      <Nav.Link
        className="navElement"
        target="_blank"
        href="https://www.linkedin.com/in/james-geneser-01967a153/"
      >
        LinkedIn
      </Nav.Link>
    </Nav>
  );
}

export default Navigation;
