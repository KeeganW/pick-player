import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function App() {
  return (
    <Container fluid>
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="">
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/icon.svg`}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' '}
            Pick Player
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="custom">Custom Lists</Nav.Link>
            <Nav.Link as={Link} to="game">By Game</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </Container>
  )
}
