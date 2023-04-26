import React from "react";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import RecipeDetail from "./RecipeDetail";

import LoggedinPic from "../../../components/LoggedinPic";
import { useCurrentUser } from "../../../contexts/CurrentUser";


const Post = (props) => {
    let {
        id,
        name,
        owner,
        profile_id,
        profile_image,
        username
    } = props;


    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
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
            <Button variant="outline-success" type="submit">Create Recipe</Button>{' '}
            <Button variant="outline-success" onClick={() => history.goBack()}>Cancel</Button>{' '}
        </div>

    );

    return (
        
        <Card >
            <Card.Body>
                
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <LoggedinPic src={profile_image} height={55} />
                        {owner}
                    </Link>
                    <div className="d-flex align-items-center">
                    
        {name}
        {owner}
        {profile_id}
       
       {username}
                    </div>
                    </Media>
            </Card.Body>
                    <Row>
                <Col md={5} lg={12} className="d-none d-md-block p-0 p-md-2">
                    <Container >{buttonFields}</Container>
             </Row>
            <Link to={`/posts/${id}`}>

            </Link>
            <Card.Body>

                <div >

                    <Link to={`/posts/${id}`}>
                        <i className="far fa-comments" />
                    </Link>

                </div>
            </Card.Body>
        </Card>
    );
};

export default Post;
