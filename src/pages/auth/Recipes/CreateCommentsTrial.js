import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../../styles/SignIn.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";
import appStyles from "../../../App.module.css";
import { SetCurrentUserContext } from "../../../App";
import InputGroup from "react-bootstrap/InputGroup";
import {
    Form,
    Button,
    Col,
    Row,
    Container,
    Alert,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const CreateCommentsTrial= (props) => {
    const { post, setPost, setComments, profileImage, profile_id } = props;
    const [content, setContent] = useState("");

    const handleChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axiosRes.post("/Recipecomments/", {
                content,
                post,
            });
            setComments((prevComments) => ({
                ...prevComments,
                results: [data, ...prevComments.results],
            }));
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count + 1,
                    },
                ],
            }));
            setContent("");
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <Row className={styles.Row}>
      <Col  md={12}>
        <Container className={`${appStyles.Content} `}>
        <Form className="mt-4" onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup>

                    <Form.Control

                        placeholder="my comment..."
                        as="textarea"
                        value={content}
                        onChange={handleChange}
                        rows={2}
                    />
                </InputGroup>
            </Form.Group>
            <Button
                className={` btn d-block ml-auto`}
                disabled={!content.trim()}
                variant="outline-success"
                type="submit"
            >
                Add your coment here
            </Button>
        </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default CreateCommentsTrial;