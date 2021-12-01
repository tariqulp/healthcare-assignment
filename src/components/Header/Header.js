import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            {/* added responsive navBar */}
            <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Navbar.Brand as={Link} to="/home">ideaCare</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/appoinment">Appoinment</Nav.Link>
                            <Nav.Link as={Link} to="/doctor">Doctor</Nav.Link>
                            <Nav.Link as={Link} to="/service">Services</Nav.Link>
                            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        {/* <Navbar.Text> */}
                        {
                            (user.email && <p style={{ color: 'white' }}>Sign in as: {user.displayName}</p>)
                        }
                        {/* </Navbar.Text> */}
                        {
                            user.email ? (<Button onClick={logOut} variant="outline-light" className='m-2'>Sign out</Button>) :
                                (<Link to='/login'>
                                    <Button variant="outline-light" className='m-2'>Sign In</Button>
                                </Link>)
                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;