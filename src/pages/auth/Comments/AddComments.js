import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../../styles/SignIn.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";
import appStyles from "../../../App.module.css";
import { SetCurrentUserContext } from "../../../App";
import Image from "react-bootstrap/Image";


import {
  Form,
  Button,
  Col,
  Row,
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";

const AddComments = () => {

  const [errors, setErrors] = useState({});
  const [commentData, setPostData] = useState({
    name: "",
    subject:"",
   
  });


  const { name, subject } = commentData;
  // const { image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {

    console.log(event.target);
    setPostData({
      ...commentData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitbutton = async (event) => {
    event.preventDefault();
    console.log("call");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("subject", subject);
    try {
      const { data } = await axiosReq.post("/Recipecomment/", formData);
      console.log(data);
     // history.push(`/Recipecomment/${data.id}`);
      history.push(`/showcomments`);

    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={12}>
        <h1 className="appstye.Content">Add your comment here</h1>
        <Container className={`${appStyles.Content} p-4 `}>
          <Form onSubmit={handleSubmitbutton}>

            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control className={styles.Input} type="text" placeholder="Please enter the name of the subject" col={6} name="name" value={name} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" className={styles.Input} placeholder="Add your comment here"name="subject" value={subject} onChange={handleChange} />
            </Form.Group>
            <Button variant="outline-success" type="submit">Add Comment</Button>{' '}
            <Button variant="outline-success" onClick={() => history.push(`/showrecipes`)}>Cancel</Button>{' '}

          </Form>

        </Container>

      </Col>
    </Row>
  );
};

export default AddComments;