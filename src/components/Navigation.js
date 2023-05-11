import React, { useState, useEffect } from "react";
import HomePortfolio from "./HomePortfolio";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";
import Contact from "./modals/Contact";
import { useLocation, useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Resume from "./modals/Resume";
// import Nav from "react-bootstrap/Nav";

// function Navigation() {
//   return (
//     <>
//       <Nav className="justify-content-center" activeKey="/home">
//         <Nav.Item>
//           <Nav.Link href="/home">Active</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-1">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-2">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="disabled" disabled>
//             Disabled
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </>
//   );
// }

// export default Navigation;

function Navigation() {
  return (
    <Nav className="nav justify-content-center">
      <HomePortfolio />
      <Contact />
      <Image
        className="logo"
        src={require("../components/images/profileLogo.png")}
      ></Image>
      <Resume />
      <Nav.Link
        className="nav-item"
        target="_blank"
        href="https://www.linkedin.com/in/james-geneser-01967a153/"
      >
        LinkedIn
      </Nav.Link>
    </Nav>
  );
}

export default Navigation;
