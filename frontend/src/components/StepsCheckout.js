import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const StepsCheckout = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb4">
      <NavItem>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </NavItem>
      <NavItem>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </NavItem>
      <NavItem>
        {step3 ? (
          <LinkContainer to="/payement">
            <Nav.Link>Payement</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payement</Nav.Link>
        )}
      </NavItem>
      <NavItem>
        {step4 ? (
          <LinkContainer to="/placerder">
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </NavItem>
    </Nav>
  );
};

export default StepsCheckout;
