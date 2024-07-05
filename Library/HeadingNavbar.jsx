import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,NavLink} from "react-router-dom";
import "./styling.css"


export const HeadingNavbar = () => {
  return (
    <>
      <Navbar data-bs-theme="dark" className="navbgcolor">
        <Container>
          <Navbar.Brand>Library Books</Navbar.Brand>
          <Nav className="gap-3">
            <Nav.Link href="">
              <Link className='text-decoration-none text-white link' to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/addbook" className='text-decoration-none text-white link'>Add Book</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}
