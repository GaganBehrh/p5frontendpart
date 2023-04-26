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
