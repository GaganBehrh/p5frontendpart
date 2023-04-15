import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import RecipeImage from "../../../components/RecipeImage";
import Upload from "../../../media/upload.png";
import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
function CreateRecipes() {
    const [errors, setErrors] = useState({});
    const fileSelectedHandler = (event) => {
        console.log(event);
    }
    /* const [postData, setPostData] = useState({
         title ="",
         content="",
         image="",
 
     });*/
    /* const { title, content, image } = postData;
    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };*/

    /*   const handleChangeoftheImage = (event) => {
          if (event.target.files.length) {
              URL.revokeObjectURL(image);
             setPostData({
                  ...postData,
                  image: URL.createObjectURL(event.target.files[0]),
              })
          }
      }*/


    const buttonFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>RecipeName</Form.Label>
                <Form.Control type="text" placeholder="Please enter the name of the recipe" col={6} name="Recipe" /*value={Recipe} onChange={handleChange}*/ />
            </Form.Group>
            <Form.Group>
                <Form.Label>RecipeSteps</Form.Label>
                <Form.Control as="textarea" placeholder="Please enter the recipe steps" rows={8} name="Recipesteps" /*value={Recipesteps} onChange={handleChange}*/ />
            </Form.Group>
            <Form.Group>
                <Form.Label>Ingredients</Form.Label>
                <Form.Control as="textarea" placeholder="Please enter the Ingredients" rows={8} rowsname="Recipesteps" />
            </Form.Group>
            <Button variant="outline-success" type="submit">Create Recipe</Button>{' '}
            <Button variant="outline-success">Cancel</Button>{' '}


        </div>
    );
    return (
        <Form>
            <Row>
                <Col md={5} lg={12} className="d-none d-md-block p-0 p-md-2">
                    <Container >{buttonFields}</Container>
                    <Container>
                        <Form.Label
                            className="d-flex justify-content-center"
                            htmlFor="image-upload"
                        >
                            <input type="file" onChange={this.fileSelectedHandler} />

                        </Form.Label>
                    </Container>
                </Col>
            </Row>
        </Form>
    );
}



export default CreateRecipes;