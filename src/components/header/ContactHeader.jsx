import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";

export class ContactHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      handleSearch,
      searchRef,
      handleCategory,
      category,
      handleOrder,
      order,
    } = this.props;
    return (
      <div>
        <h1 className="text-center mt-2">My Contacts</h1>
        <InputGroup className="my-3">
          <Form.Control
            onChange={handleSearch}
            ref={searchRef}
            placeholder="Search contacts"
          />
          <InputGroup.Text>
            <Form.Select onChange={handleCategory} value={category}>
              <option value="all">All</option>
              <option value="family">Family</option>
              <option value="friends">Friends</option>
              <option value="relatives">Relatives</option>
              <option value="others">Others</option>
            </Form.Select>
          </InputGroup.Text>
          <InputGroup.Text>
            <Form.Select onChange={handleOrder} value={order}>
              <option value="all">Sort</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </Form.Select>
          </InputGroup.Text>
        </InputGroup>
      </div>
    );
  }
}

export default ContactHeader;
