import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";

function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="nav-item navElement" variant="" onClick={handleShow}>
        Resume
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle">My Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={require("../images/Resume23.pdf")} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Quit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Contact />);

export default Contact;
