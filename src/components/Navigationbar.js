/*import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navigationbar.module.css";
import { CurrentUserContext } from "../App";
import axios from "axios";
import LoggedinPic from "./LoggedinPic";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../tokens/RefreshTokens";
*/
/*
const Navigationbar = () => {
    const currentUser = useContext(CurrentUserContext);
    
    const setCurrentUser = useSetCurrentUser();


    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    const addPostIcon = (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create"
        >
            <i className=""></i>Add post
        </NavLink>

    );
    const loggedInIcons = <> <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className=""></i>Sign out
    </NavLink>
        <NavLink
            className={styles.NavLink}
            to={`/profiles/${currentUser?.profile_id}`}
        >
            <LoggedinPic src={currentUser?.profile_id} text="Profile" height={40} />
        </NavLink>
    </>;
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

*/

import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";

const NavBar = () => {
    const currentUser = useContext(CurrentUserContext);

    const loggedInIcons = <>{currentUser?.username}</>;
    const loggedOutIcons = (
        <>
            <NavLink
              
               
                to="/signin"
            >
                <i className="fas fa-sign-in-alt"></i>Sign in
            </NavLink>
            <NavLink
                to="/signup"
              
            >
                <i className="fas fa-user-plus"></i>Sign up
            </NavLink>
        </>
    );

    return (
        <Navbar  expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                   
                    </Navbar.Brand>
                </NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink
                            exact
                          
                            to="/"
                        >
                            <i className="fas fa-home"></i>Home
                        </NavLink>

                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
