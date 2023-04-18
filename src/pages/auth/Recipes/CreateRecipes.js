import React, { useState, useRef } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
/*import {RecipeImage} from "../../../components/RecipeImage";
 <RecipeImage src={Upload} message={"Click to Upload"} />*/
import Upload from "../../../media/upload.png";
import Image from "react-bootstrap/Image";
import axios from "axios";


function CreateRecipes() {
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        RecipeName: "",
        RecipeSteps: "",
        Ingredients: "",
        image: "",
    });

    const { RecipeName, RecipeSteps, Ingredients, image } = postData;

    const imageInput = useRef(null);

    const handleChange = (event) => {
        console.log("call");
        console.log(event.target);
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeoftheImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            console.log(image);
            /*  setPostData({
                  ...postData,
                  image: URL.createObjectURL(event.target.files[0]),
              });*/
            console.log(URL.revokeObjectURL(image));
        }
        console.log("dfkd");
    };


    const buttonFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>RecipeName</Form.Label>
                <Form.Control type="text" placeholder="Please enter the name of the recipe" col={6} name="RecipeName" value={RecipeName} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>RecipeSteps</Form.Label>
                <Form.Control as="textarea" placeholder="Please enter the recipe steps" rows={8} name="RecipeSteps" value={RecipeSteps} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Ingredients</Form.Label>
                <Form.Control as="textarea" placeholder="Please enter the Ingredients" rows={8} name="Ingredients" value={Ingredients} onChange={handleChange} />
            </Form.Group>
            <Button variant="outline-success" type="submit">Create Recipe</Button>{' '}
            <Button variant="outline-success" onClick={() => { }}>Cancel</Button>{' '}
        </div>
    );

    return (
        <Form>
            <Row>
                <Col md={5} lg={12} className="d-none d-md-block p-0 p-md-2">
                    <Container >{buttonFields}</Container>
                    <Container >
                        <Form.Group className="text-center">
                            {image ? (
                                <>
                                    <figure>
                                        <Image src={image} rounded />
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
        </Form >
    );
}



export default CreateRecipes;

/* <input type="file" onChange={fileSelectedHandler} />
<button onClick={fileUploadHandler}>Upload</button>*/
/*const fileSelectedHandler = (event) => {*/
/*console.log(event.target.files[0]);*/
/*    if (event.target.files.length)
        this.setState({
            selectedFile: event.target.files[0],
        })
}

const fileUploadHandler = (event) => {
    const image = URL.createObjectURL(event.target.files[0])
    /* const fd = new FormData();
     fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
     axios.post("https://p5djangobackend.herokuapp.com").then(res => console.log(res));*/
/*
if (event.target.files.length) {
   URL.revokeObjectURL(image);
   this.setState({
       selectedFile: event.target.files[0],
       image: URL.createObjectURL(event.target.files[0])
   })
}

}*/