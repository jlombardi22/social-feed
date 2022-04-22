import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav } from "reactstrap";

const NavBar = props => {
  return (
    <div>
      <Navbar className="nav">
        <NavbarBrand className="me-auto" href="/">
          Social Feed
        </NavbarBrand>
        <NavbarToggler className="me-2 nav-button" />
        <Collapse navbar>
          <Nav navbar></Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
