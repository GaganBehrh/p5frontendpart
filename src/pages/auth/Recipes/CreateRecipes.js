import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
function CreateRecipes() {
    const [errors, setErrors] = useState({});


    const buttonFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>RecipeName</Form.Label>
                <Form.Control type="text" placeholder="Please enter the name of the recipe" col={6} name="Recipe" />
            </Form.Group>
            <Form.Group>
                <Form.Label>RecipeSteps</Form.Label>
                <Form.Control as="textarea" placeholder="Please enter the recipe steps" rows={8} rowsname="Recipesteps" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Ingredients</Form.Label>
                <Form.Control as="textarea" placeholder="Please enter the Ingredients" rows={8} rowsname="Recipesteps" />
            </Form.Group>

            <Button variant="outline-primary">Cancel</Button>{' '}
            <Button variant="outline-success" type="submit">Create Recipe</Button>{' '}

        </div>
    );

    return (
        <Form>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>


                    <Container
                        className={`  d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">

                            <Form.Label
                                className="d-flex justify-content-center"
                                htmlFor="image-upload"
                            >

                            </Form.Label>

                        </Form.Group>
                        <div className="d-md-none">{buttonFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={12} className="d-none d-md-block p-0 p-md-2">
                    <Container >{buttonFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}



export default CreateRecipes;