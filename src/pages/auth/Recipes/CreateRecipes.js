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

            <Button variant="outline-primary">Cancel</Button>{' '}
            <Button variant="outline-success" type="submit">Create Recipe</Button>{' '}

        </div>
    );

    return (
        <Form>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container>
                        <div className="d-md-none">{buttonFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container >{buttonFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}



export default CreateRecipes;