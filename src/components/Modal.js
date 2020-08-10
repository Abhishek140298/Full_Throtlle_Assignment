import React from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";

function GetModal(props) {
  console.log(props, "GetModal");
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>{props.data && props.data.real_name} </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Start Date</th>
                <th>Start Time</th>
                <th>End Data</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {props.data &&
                props.data.activity_periods &&
                props.data.activity_periods.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.start_time.slice(0, 10)}</td>
                    <td>{item.start_time.slice(11, 18)}</td>
                    <td>{item.end_time.slice(0, 10)}</td>
                    <td>{item.end_time.slice(11, 18)}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={(e) => props.onHide()}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GetModal;
