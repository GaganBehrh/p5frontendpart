import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navigationbar.module.css";
import { CurrentUserContext } from "../App";

const Navigationbar = () => {
    const currentUser = useContext(CurrentUserContext)

    const addPostIcon = (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create"
        >
            <i className="far fa-plus-square"></i>Add post
        </NavLink>
    );
    const loggedInIcons = <>{currentUser?.username}</>;
    console.log(loggedInIcons);
    console.log(currentUser);
    const loggedOutIcons = <><NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
        Sign in
    </NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
            Sign up
        </NavLink></>

    return (
        <Navbar className={styles.Navigationbar} expand="md" fixed="top">
            <Container>
                <Navbar.Brand>
                    ReciBook
                </Navbar.Brand>
             {addPostIcon}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
                            Home
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Navigationbar;


