import React, { Component, createRef } from "react";
import { v4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactHeader from "../components/header/ContactHeader";
import { Container } from "react-bootstrap";
import ContactForm from "../components/form/ContactForm";
import ContactCard from "../components/card/ContactCard";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.searchRef = createRef();
    this.state = {
      contacts: JSON.parse(localStorage.getItem("contacts")) || [
        {
          name: "Arnie",
          lastname: "Thompson",
          category: "friends",
          phone: "+998938888",
          id: 0,
        },
        {
          name: "Thomas",
          lastname: "Craft",
          category: "family",
          phone: "+9989388885",
          id: 1,
        },
        {
          name: "John",
          lastname: "Doe",
          category: "others",
          phone: "+998938738",
          id: 2,
        },
      ],
      contact: {
        name: "",
        lastname: "",
        category: "family",
        phone: "",
      },
      selected: null,
      search: "",
      category: "all",
      order: "all",
      validated: false,
      openModal: false,
    };
  }
  render() {
    const {
      contacts,
      contact,
      selected,
      search,
      category,
      validated,
      order,
      openModal,
    } = this.state;
    const handleSearch = () => {
      this.setState({
        search: this.searchRef.current.value.trim().toLowerCase(),
      });
    };
    const handleContact = (e) => {
      this.setState({ contact: { ...contact, [e.target.id]: e.target.value } });
    };
    const submit = (e) => {
      e.preventDefault();
      if (e.target.checkValidity()) {
        let newContact = { ...contact, id: v4() };
        let newContacts;
        if (selected === null) {
          newContacts = [...contacts, newContact];
          this.setState({ openModal: false });
          toast.success("Added successfully");
        } else {
          newContacts = contacts.map((contact) => {
            if (contact.id === selected) {
              return newContact;
            }
            return contact;
          });
          toast.info("Edited Successfully");
        }

        localStorage.setItem("contacts", JSON.stringify(newContacts));
        this.setState({
          contacts: newContacts,
          contact: {
            name: "",
            lastname: "",
            category: "family",
            phone: "",
          },
          selected: null,
          validated: false,
        });
      } else {
        this.setState({ validated: true });
      }
    };
    const deleteContact = (id) => {
      let newContacts = contacts.filter((contact) => contact.id !== id);
      toast.warning("Removed !");
      this.setState({ contacts: newContacts });
      localStorage.setItem("contacts", JSON.stringify(newContacts));
    };
    const editContact = (id) => {
      this.setState({ openModal: true });
      this.setState({ selected: id });
      const contact = contacts.find((contact) => contact.id === id);
      this.setState({ contact, selected: id });
    };
    let allContacts = contacts.filter((contact) =>
      contact.name.trim().toLowerCase().includes(search)
    );
    const handleCategory = (e) => {
      this.setState({ category: e.target.value });
    };
    if (category !== "all") {
      allContacts = allContacts.filter(
        (contact) => contact.category === category
      );
    }
    const handleOrder = (e) => {
      this.setState({ order: e.target.value });
    };
    if (order !== "all") {
      if (order === "a-z") {
        allContacts = allContacts.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else if (order === "z-a") {
        allContacts = allContacts.sort((a, b) => (a.name > b.name ? -1 : 1));
      }
    }
    const showModal = () => {
      this.setState({ openModal: true });
    };
    const hideModal = () => {
      this.setState({ openModal: false });
    };

    return (
      <Container>
        <ToastContainer autoClose="1000" />

        <ContactHeader
          openModal={openModal}
          showModal={showModal}
          category={category}
          handleCategory={handleCategory}
          order={order}
          handleOrder={handleOrder}
          searchRef={this.searchRef}
          handleSearch={handleSearch}
        />
        <ContactForm
          hideModal={hideModal}
          showModal={showModal}
          openModal={openModal}
          validated={validated}
          selected={selected}
          submit={submit}
          handleContact={handleContact}
          contact={contact}
        />
        <div className="contact-row">
          {allContacts.map((contact, i) => {
            return (
              <ContactCard
                hideModal={hideModal}
                showModal={showModal}
                editContact={editContact}
                deleteContact={deleteContact}
                key={i}
                {...contact}
              />
            );
          })}
        </div>
      </Container>
    );
  }
}

export default HomePage;
