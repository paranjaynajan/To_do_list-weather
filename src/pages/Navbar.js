import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container, Button } from "react-bootstrap";
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";

function Navbar1() {
  const nav = useNavigate();

  return (
    <>
      <div style={{ border: "1px solid black" }}>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link href="/weather">Weather</Nav.Link>

              <Nav.Link
                onClick={() => {
                  nav("Task4");
                }}
              >
                To-do list
              </Nav.Link>
            </Nav>
            <Button variant="primary" style={{ margin: "5px" }}>
              Log-in
            </Button>
            <Button variant="primary">Sign-up</Button>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navbar1;
