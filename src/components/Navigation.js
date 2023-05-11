import React, { useState, useEffect } from "react";
import HomePortfolio from "./HomePortfolio";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";
import Contact from "./modals/Contact";
import { useLocation, useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";

function Navigation() {
  return (
    <Navbar className="justify-content-center">
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="justify-content-center"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <HomePortfolio />

          <Image
            className="logo"
            src={require("../components/images/profileLogo.png")}
          ></Image>
          <Contact />

          <Nav.Link
            target="_blank"
            href="https://www.linkedin.com/in/james-geneser-01967a153/"
          >
            LinkedIn
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
