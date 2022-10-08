import React from "react";
import {
  Navbar,
  NavbarBrand,
  Input,
  Form,
  Button
} from "reactstrap";

const NavigationBar = ({ searchHandler }) => {

  return (
    <Navbar>
      <NavbarBrand className="text-light mx-5" href="/">React Notes</NavbarBrand>
      <Form className="d-flex justify-content-center mx-5 " role="search">
        <Input className="form-control me-2 search-input rounded-pill w-full" onChange={(e) => searchHandler(e.target.value)} type="search" placeholder="Search for notes" aria-label="Search" />
        <Button color="info" outline type="submit"><i className="gg-search"></i></Button>
      </Form>
    </Navbar>
  );
};

export default NavigationBar;
