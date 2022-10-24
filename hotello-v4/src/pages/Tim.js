import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import Form from "react-bootstrap/Form";

function Tim() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

<Button variant="primary" onClick={handleShow}>
        Boka
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tack för din bokning </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Stäng
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Skriv ut
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Tim;

// render(<Example />);


