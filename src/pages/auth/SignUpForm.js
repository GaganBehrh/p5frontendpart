
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import styles from "../../styles/SignUp.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';


import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const handleSubmit = async (event) => {
    event.preventDefault();
}
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

                    {/* <Form onSubmit={handleSubmit}> */}
                    <Form onSubmit={console.log("errors", errors.firstname)}>

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
                            <Form.Control type="text" placeholder="Enter your lastname" value={lastname} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" value={password1} required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm your assword" value={password2} required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
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