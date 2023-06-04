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
        name: "",
        subject: "",

    });
    const { name, subject } = postData;
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/Recipecomment/${id}/`);
                setPostData({ ...postData, name: data.name, subject: data.subject })
                console.log(id);
                console.log(data);
                const { name, subject } = data;

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
        formData.append("name", name);
        formData.append("subject", subject);


        try {
            await axiosReq.put(`/Recipecomment/${id}/`, formData);
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
                <Container>
                    <Form onSubmit={handleSubmitbutton}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Please enter the name of the recipe" col={6} name="name" value={name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" placeholder="Please enter the recipe steps" name="subject" value={subject} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="outline-success" type="submit" >Edit Recipe</Button>{' '}
                        <Button variant="outline-success" onClick={() => history.push(`/Recipecomment/${id}/del`)} >Delete</Button>{' '}
                        <Button variant="outline-success" onClick={() => history.goBack()}>Cancel</Button>{' '}
                    </Form>
                </Container>

            </Col>
        </Row>
    );
};
export default EditComment;

