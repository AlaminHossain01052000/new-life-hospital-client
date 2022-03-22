import React from 'react';
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
const DashboardHomePage = () => {
    const { user, admin } = useAuth();
    return (
        <div>
            {admin ? <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#0abde3" }}>
                <Container>
                    <Navbar.Brand className='font-island' href="/">New Life Hospital</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link as={Link} className="dashboard-nav-link" to="/"> Home</Nav.Link >
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} className="dashboard-nav-link" to="/dashboard/makeAdmin">Make Admin</Nav.Link >
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} className="dashboard-nav-link" to="/dashboard/appliedAppointments">All Appointments</Nav.Link >
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} className="dashboard-nav-link" to="/dashboard/allReviews">All Reviews</Nav.Link>
                            </Nav.Item>






                        </Nav>
                    </Navbar.Collapse>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            {user?.displayName}
                        </Nav.Link>
                    </Nav.Item>

                </Container>
            </Navbar> :
                <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#0abde3" }}>
                    <Container>
                        <Navbar.Brand className='font-island' href="/">New Life Hospital</Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link as={Link} className="dashboard-nav-link" to="/dashboard">Home</Nav.Link >
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} className="dashboard-nav-link" to="/dashboard/myAppointments">My Appointments</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} className="dashboard-nav-link" to="/dashboard/myReviews">My Reviews</Nav.Link>
                                </Nav.Item>





                            </Nav>
                        </Navbar.Collapse>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                {user?.displayName}
                            </Nav.Link>
                        </Nav.Item>

                    </Container>
                </Navbar>
            }

            <Outlet></Outlet>
        </div>
    );
};

export default DashboardHomePage;