import {Container,
Navbar,
Nav } from 'react-bootstrap';
import React, { Component } from 'react';

function Menu () {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">OPME - Challenge</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#TEST">TEST</Nav.Link>
                <Nav.Link href="#HEY_ANOTHER_TEST">HEY_ANOTHER_TEST</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Menu;