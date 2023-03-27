import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const Navigationbar = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Recipbook</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link >SignUp</Nav.Link>
                        <Nav.Link >Signin</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />


        </>
    );
}

export default Navigationbar;