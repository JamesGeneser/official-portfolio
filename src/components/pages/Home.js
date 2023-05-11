import { React } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BackgroundAnimation from "../animations/backgroundAnimation";

export default function Home() {
  return (
    <>
      {/* <BackgroundAnimation /> */}

      <Container>
        <Row>
          <Col>
            <img
              className="profileImg"
              src={require("../images/profile.jpg")}
            ></img>
          </Col>
          <Col>
            <h2>Web Developer</h2>
            <p>
              Experienced in: React, GraphQl, MongoDB, MySQL, and JavaScript
            </p>
            <h4>Animator</h4>
            <p>
              Skilled in using the Gsap library. An eye for design and visual
              engagement.
            </p>
          </Col>
        </Row>
        <Col></Col>
      </Container>

      {/* <Card className="aboutCard">
        <Card.Img
          className="profileImg"
          variant="top"
          src={require("../images/profile.jpg")}
        />
        <Card.Body>
          <Card.Title className="fs-1 cardTitle">About Me</Card.Title>
          <p className="lh-3">
            James Geneser is a programmer with front and back-end development
            skills. In addition to JavaScript, Express, Node, MySQL, MongoDB,
            React, and Graph QL, he is also experienced in animation and design.
            James has a mind for creativity and fresh ideas. Take a look around
            his portfolio to see some of his work.
          </p>
        </Card.Body>
      </Card> */}
    </>
  );
}
