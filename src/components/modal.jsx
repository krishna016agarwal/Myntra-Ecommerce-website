import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="button"  onClick={handleShow}>
      Add Item
      </button>

      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>Item succesfully added !</Modal.Body>
       
      </Modal>
    </>
  );
}

export default Example;