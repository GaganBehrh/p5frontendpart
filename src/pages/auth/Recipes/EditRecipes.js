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
    const id = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/${id}/`);
                const { name, matter, pic, is_owner } = data;

                is_owner ? setPostData({ name, matter, pic }) : history.push("/");
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
                imageInput: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmitbutton = async (event) => {
        event.preventDefault();
        console.log("call");
        const formData = new FormData();
        formData.append("name", name);
        formData.append("matter", matter);
        formData.append("pic", imageInput.current.files[0]);
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
                                        <Form.label htmlFor="image-upload">
                                            Change the Image
                                        </Form.label>
                                    </div>
                                </>

                            ) : (
                                <Form.Label
                                    className="d-flex justify-content-center"
                                    htmlFor="image-upload"
                                >

                                </Form.Label>
                            )}
                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeoftheImage}
                                ref={imageInput}
                            />
                        </Form.Group>
                    </Container>
                </Col>
            </Row>
        </form>
    );
}



export default EditRecipes;

