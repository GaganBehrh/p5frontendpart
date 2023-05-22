import React from "react";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import RecipeDetail from "./RecipeDetail";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import LoggedinPic from "../../../components/LoggedinPic";
import { useCurrentUser } from "../../../contexts/CurrentUser";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";
import { useHistory } from "react-router";
const Post = (props) => {
    let {
        id,
        name,
        matter,
        owner,
        profile_id,
        profile_image,
        username
    } = props;


    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();
    const editRecipepagerouting = () => {
        history.push(`/Recipeposts/${id}/edit`)
    }
    // Delete function
    const deleteRecipe = async () => {
        await axiosRes.delete(`/Recipeposts/${id}/`)
        history.goBack();
    }

    const FormFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>UserName</Form.Label>
                <Form.Control type="text" col={6} name="name" value={owner} />
            </Form.Group>
            <Form.Group>
                <Form.Label>RecipeName</Form.Label>
                <Form.Control type="text" col={6} name="name" value={name} />
            </Form.Group>
            <Form.Group>
                <Form.Label>RecipeSteps</Form.Label>
                <Form.Control as="textarea" placeholder="Please enter the recipe steps" rows={8} value={matter} />
            </Form.Group>
            <Button variant="outline-success" onClick={() => { deleteRecipe() }}>Delete</Button>{' '}
            <Button variant="outline-success" onClick={() => { editRecipepagerouting() }}>Edit</Button>{' '}
            <Button variant="outline-success" onClick={() => history.push('/recipepostspage')}>Cancel</Button>{' '}
        </div>

    );
    return (

        <Card >
            <Card.Body>

                <Media className="align-items-center justify-content-between">
                    <form>
                        <Row>
                            <Col md={5} lg={12} className="d-none d-md-block p-0 p-md-2">
                                <Container >{FormFields}</Container>
                            </Col>
                        </Row>
                    </form>
                </Media>
            </Card.Body>

            <Link to={`/posts/${id}`}>

            </Link>
            <Card.Body>

            </Card.Body>
        </Card>
    );
};

export default Post;
