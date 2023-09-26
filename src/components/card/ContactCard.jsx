import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class ContactCard extends Component {
  render() {
    const {name, lastname, id, category, phone, deleteContact, editContact} = this.props;
    const colors = {
      family: "bg-danger",
      friends: "bg-success",
      relatives: "bg-info",
      others: "bg-secondary",
    };
    return (
      <div className=" contact-card w-100 mt-3 border border-primary rounded-3 pt-3 pb-3 px-3 align-items-center row cursor-pointer">
        <div className="contact-col col1 col-5 d-flex align-items-center gap-3">
          <button className="btn btn-danger fs-5">{name[0]}</button>
          <p className="text-primary fs-5 m-0">
            {name} {lastname}
          </p>
          <p className={`badge mb-0 ${colors[category]}`}>{category}</p>
        </div>
        <p className="contact-col col2 col-5 fs-5 text-primary text-underline text-decoration-underline m-0">
          {phone}
        </p>
        <div className="contact-col col3 d-flex gap-3 col-2">
          <Button onClick={() => {
            this.setState({openModal: false})
            editContact(id);
          } } type="submit">
            Edit
          </Button>
          <Button
            onClick={() => deleteContact(id)}
            variant="danger"
            type="submit"
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default ContactCard;
