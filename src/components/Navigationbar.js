import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navigationbar.module.css";
import { CurrentUserContext } from "../App";
import axios from "axios";
import LoggedinPic from "./LoggedinPic";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../contexts/CurrentUser";


const Navigationbar = () => {
    const currentUser = useCurrentUser();
    //console.log(currentUser);

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
            <i className=""></i>Add Recipe
        </NavLink>

    );
    const loggedInIcons = <> <NavLink className={styles.NavLink} to="/hme" onClick={handleSignOut}>
        <i className=""></i>Sign out
    </NavLink>
        <NavLink
            className={styles.NavLink}
            to={`/profiles/${currentUser?.profile_id}`}
        >

            <LoggedinPic src={currentUser?.profile_id} text="Profile" height={20} />

        </NavLink>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/Recipeposts/create"
        >
            <i className=""></i>Add Recipe
        </NavLink>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="Recipeposts/:${id}/edit"
        >
            <i className=""></i>Edit Recipe
        </NavLink>
    </>;
    //console.log(loggedInIcons);
    //console.log(currentUser);
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
                    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/">
                        ReciBook
                    </NavLink>

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">

                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Navigationbar;


