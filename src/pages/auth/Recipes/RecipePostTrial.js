import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../../styles/SignIn.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";
import appStyles from "../../../App.module.css";
import { SetCurrentUserContext } from "../../../App";
import Image from "react-bootstrap/Image";
import CreateCommentsTrial from "../Recipes/CreateCommentsTrial";
import { useCurrentUser } from "../../../contexts/CurrentUser";

import InputGroup from "react-bootstrap/InputGroup";
import {
    Form,
    Button,
    Col,
    Row,
    Container,
    Alert,
} from "react-bootstrap";
import axios from "axios";
const RecipePostTrial = (props) => {
    let {
        id,
        name,
        matter,
        owner,
        profile_id,
        profile_image,
        username,
    } = props;


    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const { post, setPost, setComments, profileImag } = props;
    const [content, setContent] = useState("");

    const handleChange = (event) => {
        setContent(event.target.value);
    };
    const history = useHistory();
    const editRecipepagerouting = () => {
        history.push(`/Recipeposts/${id}/edit`)
    }

    const deleteRecipe = async () => {
        await axiosRes.delete(`/Recipeposts/${id}/`)
        history.goBack();
    }

    const handleView = async () => {
        history.push('');

    }

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
        <Row className={styles.Row} >
            <Col className="my-auto py-2 p-md-2" md={12} >
                <Container className={`${appStyles.Content} p-4 `}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>UserName < /Form.Label>
                                < Form.Control type="text" col={6} name="name" value={owner} />
                        </Form.Group>
                        < Form.Group >
                            <Form.Label>RecipeName < /Form.Label>
                                < Form.Control type="text" col={6} name="name" value={name} />
                        </Form.Group>
                        < Form.Group >
                            <Form.Label>RecipeSteps < /Form.Label>
                                < Form.Control as="textarea" placeholder="Please enter the recipe steps" rows={8} value={matter} />
                        </Form.Group>
                        < Button variant="outline-success" onClick={() => { deleteRecipe() }}> Delete < /Button>{' '}
                            < Button variant="outline-success" onClick={() => { editRecipepagerouting() }}> Edit < /Button>{' '}
                            < Button variant="outline-success" onClick={() => { history.goBack() }}> Cancel < /Button>{' '}
                                    < /Form>
                                    < /Container>

                                    < /Col>
                                    < /Row>

                                    );
};

                                    export default RecipePostTrial;



