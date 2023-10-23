'use client'

import Link from 'next/link'
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export const NavBar = () => {

  return (
      <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
              <Navbar.Brand href="#home">ReduxExpress</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/employees">Employees</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}
