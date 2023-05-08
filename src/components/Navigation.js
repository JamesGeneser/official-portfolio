import React, { useState, useEffect } from "react";

import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Contact from "./modals/Contact";
import { useLocation, useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import "../App.css";
// import "./dark.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation() {
  const [currentPage, setCurrentPage] = useState("home");

  const HandlePageChange = (page) => {
    console.log(page);

    setCurrentPage(page);
    console.log(currentPage);
  };
  return (
    <Navbar>
      <Container className="nav nav-tabs">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            onClick={(e) => HandlePageChange(e.target.name)}
          >
            {currentPage == "home" ? (
              <Nav.Link className="nav-item" name="portfolio" to="/portfolio">
                Portfolio
              </Nav.Link>
            ) : (
              <Nav.Link to="home" className="nav-item" name="home">
                Home
              </Nav.Link>
            )}

            <Nav.Link
              href="https://www.linkedin.com/in/james-geneser-01967a153/"
              className="nav-item"
            >
              LinkedIn
            </Nav.Link>
          </Nav>
          <Contact />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

// function Navigation() {
//   // const location = useLocation();
//   // const navigate = useNavigate();

//   return (
//     <div>
//       <Navbar expand="lg" className="navBar">
//         <Container>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto d-flex fw-bold">
//               <div className="btnBox">
//                 <Link to="official-portfolio/project" className="navBtns">
//                   Portfolio
//                 </Link>

//                 <Link to="official-portfolio/" className="navBtns">
//                   Home
//                 </Link>
//               </div>

//               <Nav.Link
//                 href="https://www.linkedin.com/in/james-geneser-01967a153/"
//                 target="_blank"
//               >
//                 LinkedIn
//               </Nav.Link>
//               <Contact />
//               <Nav.Link
//                 href="https://docs.google.com/document/d/1hk4DEVWNTB_027R5xQh4vOwsZDFIM1wEHkkhIrBMzQw/edit"
//                 target="_blank"
//               >
//                 Resume
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }
// export default Navigation;
