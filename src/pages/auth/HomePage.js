import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignIn.module.css";
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
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
         <h1 className={styles.Recibookcreate}>Create your new recipes today</h1>
         
        <Image
          className={`${appStyles.FillerImage}`}
          src={"https://images.themodernproper.com/billowy-turkey/production/posts/2022/MarryMeChicken_7.jpg?w=1200&h=1800&q=82&fm=jpg&fit=crop&dm=1661981453&s=eda3bbe6bf02f7b108d003457c1ea99e"}alt="recipe image"
        />
      </Col>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>SIGN IN</h1>
|</Container>
      </Col>
    </Row>
  );
};

export default HomePage;