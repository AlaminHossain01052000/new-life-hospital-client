import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">New Life Hospital</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="servicePage">Service + </Nav.Link>
                        <Nav.Link as={Link} to="doctorPage">Doctor +</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;