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

const AddRecipeTrial = () => {

  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    name: "",
    matter: "",
    pic: "",
    created_on: "",
    updated_on: "",
  });


  const { name, matter, pic, created_on, updated_on } = postData;
  // const { image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {

    console.log(event.target);
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitbutton = async (event) => {
    event.preventDefault();
    console.log("call");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("matter", matter);
    //formData.append("pic", imageInput.current.files[0]);
    formData.append("created_on", created_on);
    formData.append("updated_on", updated_on);

    try {
      const { data } = await axiosReq.post("/Recipeposts/", formData);
      console.log(data);
      history.push(`/Recipeposts/${data.id}`);

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
              <Form.Label>RecipeName</Form.Label>
              <Form.Control className={styles.Input} type="text" placeholder="Please enter the name of the recipe" col={6} name="name" value={name} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>RecipeSteps</Form.Label>
              <Form.Control as="textarea" className={styles.Input} placeholder="Please enter the recipe steps" rows={8} name="matter" value={matter} onChange={handleChange} />
            </Form.Group>
            <Button variant="outline-success" type="submit">Create Recipe</Button>{' '}
            <Button variant="outline-success" onClick={() => history.push(`/recipepostspage`)}>Cancel</Button>{' '}

          </Form>

        </Container>

      </Col>
    </Row>
  );
};

export default AddRecipeTrial;