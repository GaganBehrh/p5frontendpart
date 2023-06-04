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


const DeleteRecipe = () => {

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
                const { data } = await axiosReq.get(`/Recipeposts/${id}/`);
                setPostData({ ...postData, name: data.name })
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
        try {
            await axiosReq.delete(`/Recipeposts/${id}/`, formData);
            history.push(`/showrecipes`);

        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    return (
        <Row className={styles.Row}>
            <Col >
                <Container>
                    <Form onSubmit={handleSubmitbutton}>
                        <p class="text-sm-left">Are you sure you want to delete this recipe?</p>
                        <Button variant="outline-success" type="submit">Delete</Button>{' '}
                        <Button variant="outline-success" onClick={() => history.goBack()}>Cancel</Button>{' '}
                    </Form>
                </Container>

            </Col>
        </Row>
    );
};

export default DeleteRecipe;