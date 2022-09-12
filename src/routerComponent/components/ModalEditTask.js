import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { editTask } from "../../redux/actions/selectedProject";

const EditTask = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const [modal, setModal] = useState(false);
  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  const dispatch = useDispatch();

  const onSuccess = () => {
    handleClose();
  };

  const onError = (e) => {
    alert(e);
  };

  const changeTask = () => {
    console.log("edit task", props.id, title, description, onSuccess, onError);
    dispatch(editTask(props.id, title, description, onSuccess, onError));
  };

  return (
    <>
      <button className="btn" onClick={handleShow}>
        Edit Task
      </button>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label value={title}>Title</Form.Label>
              <Form.Control
                placeholder="Change ..."
                autoFocus
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label value={description}>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={changeTask}>
            Edit Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;
