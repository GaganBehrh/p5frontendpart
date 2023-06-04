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
const EditProfile = () => {

    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        name: "",
        subject: "",

    });
    const {owner, name,content,created_at} = postData;
    const history = useHistory();
    const { id } = useParams();
    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/profiles/${id}/`);
                setPostData({ ...postData, owner: data.owner, name: data.name,content: data.content, created_at: data.created_at })
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
        formData.append("owner", owner);
        formData.append("name", name);
        formData.append("content", content);
        formData.append("created_at", created_at);
        try {
            await axiosReq.put(`/profiles/${id}/`, formData);
            history.push(`/showprofiles`);

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
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="text" placeholder="Please enter the name of the recipe" col={6} name="Iid" value={id} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Owner</Form.Label>
                            <Form.Control type="text" placeholder="Please enter the name of the recipe" col={6} name="owner" value={owner} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Please enter the name of the recipe" col={6} name="name" value={name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" placeholder="Please enter the recipe steps"  name="content" value={content} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Created_at</Form.Label>
                            <Form.Control as="textarea" placeholder="Please enter the recipe steps"  name="created_at" value={created_at} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="outline-success" type="submit" >Edit Recipe</Button>{' '}
                        <Button variant="outline-success" onClick={() => history.goBack()}>Cancel</Button>{' '}
                    </Form>
                </Container>

            </Col>
        </Row>
    );
};

export default EditProfile;