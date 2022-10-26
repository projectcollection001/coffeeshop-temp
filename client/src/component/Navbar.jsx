import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Icon, Dropdown, DropdownItem } from "semantic-ui-react";
import React from "react";
import "../StyleSheet.css";

export function NavbarComponent() {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="#home">CoffeeShop</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      </Container>
      <Navbar.Text className="mx-3">
        Signed in as:{" "}
        <a href="#login">
          <Dropdown icon="user circle" className="icon" size="big">
            {/* <Icon name="user circle" size="big" /> */}
          </Dropdown>
        </a>
      </Navbar.Text>
    </Navbar>
  );
}
