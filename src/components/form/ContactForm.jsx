import React, { Component, createRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export class ContactForm extends Component {
  render() {
    const {
      contact,
      handleContact,
      submit,
      selected,
      validated,
      openModal,
      hideModal,
    } = this.props;
    return (
      <Form
        validated={validated}
        onSubmit={submit}
        className={`w-50 m-auto ${
          openModal ? "d-block" : "d-none"
        } p-5 rounded-5 border border-info`}
        noValidate
      >
        <div className="d-flex align-items-center justify-content-between mb-5">
          <h2 className="">Contact Info</h2>
        </div>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>First name</Form.Label>
          <Form.Control
            onChange={handleContact}
            value={contact.name}
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill out again
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            onChange={handleContact}
            value={contact.lastname}
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Form.Group as={Col} md="6" className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Select
              onChange={handleContact}
              value={contact.category}
              aria-label="Default select example"
            >
              <option value="family">family</option>
              <option value="friends">friends</option>
              <option value="relatives">relatives</option>
              <option value="others">others</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="6" className="mb-3" controlId="phone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              onChange={handleContact}
              value={contact.phone}
              required
              type="text"
              placeholder="Phone number"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="d-flex align-items-center gap-2 justify-content-between mt-3">
          <Button type="submit">
            {selected === null ? "Add" : "Save"} contact
          </Button>
          <Button onClick={hideModal} variant="secondary">
            Close
          </Button>
        </div>
      </Form>
    );
  }
}

export default ContactForm;
