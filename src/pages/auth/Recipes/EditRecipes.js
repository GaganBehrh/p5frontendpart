/*------------------The original my non sytled code----------------------*/
import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router";
import Upload from "../../../media/upload.png";
import Image from "react-bootstrap/Image";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function EditRecipes() {
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
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/Recipeposts/${id}/`);
                console.log(id);
                console.log(data);
                const { name, matter, pic, is_owner } = data;
                is_owner ? setPostData({ name, matter, pic }) : history.push('/');
                
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

    const handleChangeoftheImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(pic);
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmitbutton = async (event) => {
        event.preventDefault();
        console.log("call");
        const formData = new FormData();
        formData.append("name", name);
        formData.append("matter", matter);
        if (imageInput?.current?.files[0]) {
            formData.append("pic", imageInput.current.files[0]);
        }

        formData.append("created_on", created_on);
        formData.append("updated_on", updated_on);

        try {
            await axiosReq.put(`/Recipeposts/${id}/`, formData);
          
            history.push(`/Recipeposts/${id}`);

        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const buttonFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>RecipeName</Form.Label>
                <Form.Control type="text" placeholder="Please enter the name of the recipe" col={6} name="name" value={name} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>RecipeSteps</Form.Label>
                <Form.Control as="textarea" placeholder="Please enter the recipe steps" rows={8} name="matter" value={matter} onChange={handleChange} />
            </Form.Group>
            <Button variant="outline-success" type="submit">Edit Recipe</Button>{' '}
            <Button variant="outline-success" onClick={() => history.goBack()}>Cancel</Button>{' '}
        </div>

    );

    return (
        <form onSubmit={handleSubmitbutton} encType="multipart/form-data">
            <Row>
                <Col md={5} lg={12} className="d-none d-md-block p-0 p-md-2">
                    <Container >{buttonFields}</Container>
                    <Container >
                        <Form.Group className="text-center">
                            {pic ? (
                                <>
                                    <figure>
                                        <Image src={pic} rounded />
                                    </figure>
                                    <div>
                                        
                                    </div>
                                </>

                            ) : (
                                <Form.Label
                                    className="d-flex justify-content-center"
                                    htmlFor="image-upload"
                                >

                                </Form.Label>
                            )}
                            
                        </Form.Group>
                    </Container>
                </Col>
            </Row>
        </form>
    );
}



export default EditRecipes;
/*
------------------Non styled code ends here--------------------------
*/
/*...............walhtrough edit page.....................
import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";




import { useHistory, useParams } from "react-router";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";

function EditRecipes() {
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        title: "",
        content: "",
        image: "",
    });
    const { title, content, image } = postData;

    const imageInput = useRef(null);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/Recipeposts/${id}/`);
                const { title, content, image, is_owner } = data;

                is_owner ? setPostData({ title, content, image }) : history.push("/");
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [history, id]);

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("content", content);

        if (imageInput?.current?.files[0]) {
            formData.append("image", imageInput.current.files[0]);
        }

        try {
            await axiosReq.put(`/posts/${id}/`, formData);
            history.push(`/posts/${id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const textFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={6}
                    name="content"
                    value={content}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Button

                onClick={() => history.goBack()}
            >
                cancel
            </Button>
            <Button type="submit">
                save
            </Button>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                    >
                        <Form.Group className="text-center">
                            <figure>
                                <Image src={image} rounded />
                            </figure>
                            <div>
                                <Form.Label
                                    htmlFor="image-upload"
                                >
                                    Change the image
                                </Form.Label>
                            </div>

                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeImage}
                                ref={imageInput}
                            />
                        </Form.Group>
                        {errors?.image?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}

<Form.label htmlFor="image-upload">
                                            Change the Image
                                        </Form.label>

export default EditRecipes;
..................................*/
