import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../../styles/SignIn.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";
import appStyles from "../../../App.module.css";
import { SetCurrentUserContext } from "../../../App";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
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


const EditComment = () => {

    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        owner: "",
        content: "",

    });

    const { owner, content} = postData;
   
    // const { image } = postData;


    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/Recipecomment/${id}/`);
                setPostData({ ...postData, owner: data.owner, content: data.matter })
                console.log(id);
                console.log(data);
                const { owner, content } = data;

            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [history, id]);

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
        formData.append("owner", owner);
        formData.append("conent", content);


        try {
            await axiosReq.put(`/Recipecomment/${id}/`, formData);
            history.push(`/Recipecomment/${id}`);

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
                <Container>
                    <Form onSubmit={handleSubmitbutton}>
                        <Form.Group>
                            <Form.Label>RecipeName</Form.Label>
                            <Form.Control type="text" placeholder="Please enter the name of the recipe" col={6} name="owner" value={owner} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>RecipeSteps</Form.Label>
                            <Form.Control as="textarea" placeholder="Please enter the recipe steps" rows={8} name="content" value={content} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="outline-success" type="submit" >Edit Recipe</Button>{' '}
                        <Button variant="outline-success" onClick={() => history.goBack()}>Cancel</Button>{' '}
                    </Form>
                </Container>

            </Col>
        </Row>
    );
};

export default EditComment;