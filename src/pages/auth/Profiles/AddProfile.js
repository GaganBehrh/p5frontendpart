import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../../styles/SignIn.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";
import appStyles from "../../../App.module.css";
import { SetCurrentUserContext } from "../../../App";
import Image from "react-bootstrap/Image";
import CreateCommentsTrial1 from "../Recipes/CreateCommentsTrial1";

import {
  Form,
  Button,
  Col,
  Row,
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";

const AddComment = () => {

  const [errors, setErrors] = useState({});
  const [commentData, setPostData] = useState({
    name: "",
   owner:"",
   
  });


  const { name, owner } = commentData;
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
    formData.append("owner", owner);
    //formData.append("pic", imageInput.current.files[0]);
    //formData.append("created_on", created_on);
    //formData.append("updated_on", updated_on);

    try {
      const { data } = await axiosReq.post("/Recipecomment/", formData);
      console.log(data);
      history.push(`/Recipecomment/${data.id}`);

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
        <h1 className="appstye.Content">Create your own new recipe here</h1>
        <Container className={`${appStyles.Content} p-4 `}>
          <Form onSubmit={handleSubmitbutton}>

            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control className={styles.Input} type="text" placeholder="Please enter the name of the recipe" col={6} name="name" value={name} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ownner</Form.Label>
              <Form.Control as="textarea" className={styles.Input} placeholder="Please enter the recipe steps"name="owner" value={owner} onChange={handleChange} />
            </Form.Group>
            <Button variant="outline-success" type="submit">Add Comment</Button>{' '}
            <Button variant="outline-success" onClick={() => history.push(`/showprofiles`)}>Cancel</Button>{' '}

          </Form>

        </Container>

      </Col>
    </Row>
  );
};

export default AddComment;