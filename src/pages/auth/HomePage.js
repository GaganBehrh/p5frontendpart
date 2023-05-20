import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

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

  const handleChange = (event) => {
    setSignInData({
      ...SignInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", SignInData);
      /*Theis setcurrentuser can break the signin page*/
   
      console.log(data.user);
      console.log("call");

      history.push("/Recipeposts/create");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };


  return (
    <Row className={styles.Row}>
       <Col className="my-auto py-2 p-md-2" md={4}>
        <Container className={`${appStyles.Content} p-4 `}>
          <p className={styles.Header}>Create your own new exciting recipes here
         </p>
         <Image
          className={`${appStyles.FillerImage}`}
          src={"https://www.realsimple.com/thmb/2ixrIIlE-44L1MypGHIs2TqIQYk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-recipes-1672e2b4f9104ed3b3867a2a14889ce9.jpg"}alt="recipe image"
        />
|</Container>
      </Col>
      <Col className="my-auto py-2 p-md-2" md={4}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Donot have an account yet? Sign up here</h1>
          <Image
          className={`${appStyles.FillerImage}`}
          src={"https://www.realsimple.com/thmb/2ixrIIlE-44L1MypGHIs2TqIQYk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-recipes-1672e2b4f9104ed3b3867a2a14889ce9.jpg"}alt="recipe image"
        />
|</Container>
      </Col>
      <Col className="my-auto py-2 p-md-2" md={4}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Already have an account here? Signin here</h1>
          <Image
          className={`${appStyles.FillerImage}`}
          src={"https://www.realsimple.com/thmb/2ixrIIlE-44L1MypGHIs2TqIQYk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-recipes-1672e2b4f9104ed3b3867a2a14889ce9.jpg"}alt="recipe image"
        />
|</Container>
      </Col>
    </Row>
  );
};

export default HomePage;