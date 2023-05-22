import React, { useContext, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Parse from 'parse/dist/parse.min.js';
import styles from "../styles/Navigationbar.module.css";
import { CurrentUserContext } from "../App";
import axios from "axios";
import LoggedinPic from "./LoggedinPic";


import { useParams } from "react-router";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../contexts/CurrentUser";


const Navigationbar = () => {


    const currentUser = useCurrentUser();
    //console.log(currentUser)

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
    const loggedInIcons = <> <NavLink className={styles.NavLink} to="/signin" onClick={handleSignOut}>
        <i className=""></i>Sign out
    </NavLink>
        <div
            className={styles.NavLink}
            to={`/profiles/${currentUser?.profile_id}`}
        >
            <LoggedinPic src={currentUser?.profile_id} text="gagi123" height={20} />

        </div>
        <NavLink
            className={styles.NavLink}
           
            to="/Recipeposts/add"
        >
            <i className=""></i>Add Recipe
        </NavLink>

    </>;
    //console.log(loggedInIcons);
    console.log(currentUser);
    const loggedOutIcons = <>

    </>

    return (
        <Navbar className={styles.Navigationbar} expand="md" fixed="top">
            <Container>
                <NavLink
                    className={styles.NavLink}
                    activeClassName={styles.Active}
                    to="/home"
                >
                    <h1 className={styles.Recibook}>Recibook</h1>
                </NavLink>


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


