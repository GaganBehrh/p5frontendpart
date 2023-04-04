/*
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import styles from "../../styles/SignUp.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';


import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";


const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    firstname: "",
    lastname: "",
    password1: "",
    password2: "",
  });
  const { firstname, lastname, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-12" md={12}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          <Form onSubmit={handleSubmit}>
          </Form><Form onSubmit={console.log("errors", errors.firstname)}>
            
            <Form.Group className="mb-3" controlId="firstname">
              <Form.Label>Firstname</Form.Label>
              <Form.Control type="text" name="firstname" onChange={handleChange} placeholder="Enter your firstname" value={firstname} required />
            </Form.Group>
            {errors.firstname?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>Lastname</Form.Label>
              <Form.Control type="text" name="lastname" onChange={handleChange} placeholder="Enter your lastname" value={lastname} required />
            </Form.Group>
            {errors.lastname?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="password1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password1" onChange={handleChange} placeholder="Enter your password" value={password1} required />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group className="mb-3" controlId="password2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="password2" onChange={handleChange} placeholder="Enter your password" value={password2} required />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}


            <Button variant="primary" type="submit">
              SignUp
            </Button>
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>

    </Row >
  );
};

export default SignUpForm;

*/


import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignUp.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import {
  Form,
  Button,
  Col,
  Row,
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    firstname: "",
    lastname: " ",
    password1: "",
    password2: "",
  });
  const { firstname, lastname, password1, password2 } = signUpData;


  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
      console.log(err);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={12}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstname">
              <Form.Label className="d-none">firstname</Form.Label>

              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Firstname"
                name="firstname"
                value={firstname}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.firstname?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="lastname">
              <Form.Label className="d-none">Lastname</Form.Label>

              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Lastname"
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

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>

        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        
      </Col>
    </Row>
  );
};

export default SignUpForm;
