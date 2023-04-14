import React from "react";
import Card from "react-bootstrap/Card";

export default function Home() {
  return (
    <>
      <Card className="aboutCard">
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
      </Card>
    </>
  );
}
