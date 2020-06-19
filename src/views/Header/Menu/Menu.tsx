import {Container,
Navbar,
Nav } from 'react-bootstrap';
import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
function Menu () {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">OPME - Challenge</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/"><Link to={'/'}>HOME</Link></Nav.Link>
                <Nav.Link href="#TEST">TEST</Nav.Link>
                <Nav.Link href="#HEY_ANOTHER_TEST">HEY_ANOTHER_TEST</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Menu;