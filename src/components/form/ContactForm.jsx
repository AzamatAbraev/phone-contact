import React, { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export class ContactForm extends Component {
  render() {
    const { contact, handleContact, submit, selected, validated } = this.props;
    return (
      <Form
        validated={validated}
        onSubmit={submit}
        className="w-50 m-auto p-5 rounded-5 border border-info"
        noValidate
      >
        <h2 className="mb-4 text-center">Contact Info</h2>
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
          <Form.Control.Feedback type="invalid">Please fill out again</Form.Control.Feedback>
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
        <Button className="mt-3" type="submit">
          {selected === null ? "Add" : "Save"} contact
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
