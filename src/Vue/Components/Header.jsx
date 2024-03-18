import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">DoudouxShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/Cart">Panier</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
};

export default Header;