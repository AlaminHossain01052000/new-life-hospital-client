import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logoutUser } = useAuth();
    const loggingOut = () => {
        logoutUser();
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} to="/">New Life Hospital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/servicePage">Service + </Nav.Link>

                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/doctors">Doctor +</Nav.Link>

                            </Nav.Item>
                            <Nav.Item>
                                {
                                    user?.email ? <Nav.Link onClick={loggingOut}>Logout +</Nav.Link> : <Nav.Link as={Link} to="signin">Login +</Nav.Link>
                                }
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/signup">Register +</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/dashboard">Dashboard +</Nav.Link>
                            </Nav.Item>
                            <Nav.Link>{user?.displayName}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;