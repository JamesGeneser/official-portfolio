import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Contact from "./modals/Contact";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../App.css";
import "./dark.css";

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`${theme}-nav`}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex fw-bold">
              {location.pathname == "/" ? (
                <Nav.Link className="text-light" href="/project">
                  Portfolio
                </Nav.Link>
              ) : (
                <Nav.Link className="text-light" href="/">
                  Home
                </Nav.Link>
              )}

              <Nav.Link
                className="text-light"
                href="https://www.linkedin.com/in/james-geneser-01967a153/"
                target="_blank"
              >
                LinkedIn
              </Nav.Link>
              <Contact />
              <Nav.Link
                className="text-light"
                href="https://docs.google.com/document/d/1hk4DEVWNTB_027R5xQh4vOwsZDFIM1wEHkkhIrBMzQw/edit"
                target="_blank"
              >
                Resume
              </Nav.Link>
              <Button onClick={switchTheme}>Light Switch</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navigation;
