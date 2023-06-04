import React, { useContext, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Parse from 'parse/dist/parse.min.js';
import styles from "../styles/Navigationbar.module.css";
import { CurrentUserContext } from "../App";
import axios from "axios";
import LoggedinPic from "./LoggedinPic";
import appStyles from "../App.module.css";
import { Image } from "react-bootstrap";
import { useParams } from "react-router";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../contexts/CurrentUser";

const Navigationbar = () => {

    const currentUser = useCurrentUser();
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

            to="/Recipeposts/add"
        >
            <i className=""></i>Add Recipe
        </NavLink>

    );
    const loggedInIcons = <>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/showrecipes"
        >
            <h1 className={styles.Recibook}>Recibook</h1>
        </NavLink>
        <NavLink className={styles.NavLink} to="/signin" onClick={handleSignOut}>
            <i className=""></i>Sign out
        </NavLink>
        <div
            className={styles.NavLink}
            to={`/profiles/${currentUser?.owner}`}>
            <LoggedinPic src={currentUser?.image} height={20} />

            {currentUser?.username}

        </div>
        <NavLink
            className={styles.NavLink}
            to="/Recipeposts/add"
        >
            <i className=""></i>Add Recipe
        </NavLink>
        <NavLink
            className={styles.NavLink}

            to="/showrecipes"
        >
            <i className=""></i>View Recipes
        </NavLink>
        <NavLink
            className={styles.NavLink}
            to="/addcomment"
        >
            <i className=""></i>Add Comments
        </NavLink>
        <NavLink
            className={styles.NavLink}

            to="/showcomments"
        >
            <i className=""></i>View Comments
        </NavLink>
        <NavLink
            className={styles.NavLink}

            to="/showprofiles"
        >
            <i className=""></i>View Profiles
        </NavLink>

    </>;
    //console.log(loggedInIcons);
    console.log(currentUser);
    const loggedOutIcons = <>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/home"
        >
            <h1 className={styles.Recibook}>Recibook</h1>
        </NavLink>

    </>

    return (
        <Navbar className={styles.Navigationbar} expand="md" fixed="top">
            <Container>
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


