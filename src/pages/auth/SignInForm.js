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
  Row,
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUser";

const SignInForm = () => {

  const setCurrentUser = useSetCurrentUser();
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
      setCurrentUser(data.user);
      console.log(data.user);
      console.log("call");

      history.push("/Recipeposts/create");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };


  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={12}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>SIGN IN</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>

              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="firstname"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="lastname">
              <Form.Label className="d-none">lastname</Form.Label>

              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="lastname"
                name="lastname"
                value={lastname}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.lastname?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}


            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign In
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>

      </Col>
    </Row>
  );
};

export default SignInForm;