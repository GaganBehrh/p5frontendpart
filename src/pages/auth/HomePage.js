import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../../styles/HomePage.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { SetCurrentUserContext } from "../../App";

import {
  Form,
  Button,
  Col,
  Image,
  Row,
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUser";

const HomePage = () => {

  const [SignInData, setSignInData] = useState({
    username: "",
    lastname: "",
    password1: "",
  });
  const { username, lastname, password } = SignInData;


  const [errors, setErrors] = useState({});

  const history = useHistory();

  return (
    <Row className={styles.Row}>
       <Col className="my-auto py-2 p-md-2" md={4}>
        <Container className={`${appStyles.Content} p-4 `}>
          <p className={styles.Header} >Create new recipes by simple Sign up 
         </p>
         <Image
          className={`${appStyles.FillerImage}`}
          src={"https://images-prod.healthline.com/hlcmsresource/images/AN_images/raw-vegan-diet-1296x728-feature.jpg"}alt="recipe image"
        />
|</Container>
      </Col>
      <Col className="my-auto py-2 p-md-2" md={4}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Donot have an account yet?
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/signup"
        >
            <i className=""></i>Sign up here
        </NavLink> </h1>
          <Image
          className={`${appStyles.FillerImage}`}
          src={"https://t4.ftcdn.net/jpg/04/09/12/37/360_F_409123771_SSIjSUiM9AXVyEUVfxDT2zmoKmJDQALi.jpg"}alt="signup image"
        />
|</Container>
      </Col>
      <Col className="my-auto py-2 p-md-2" md={4}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Already have an account here?   <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/signin"
        >
            <i className=""></i>Login here
        </NavLink> </h1>
          <Image
          className={`${appStyles.FillerImage}`}
          src={"https://media.istockphoto.com/id/1224417416/vector/login-button-login-square-3d-push-button.jpg?s=612x612&w=0&k=20&c=C6Hyr-sE7JOXUgwhpsSWFHNawidhY4o26wjv63UlXiU="}alt="Login image"
        />
|</Container>
      </Col>
     
    </Row>
  );
};

export default HomePage;