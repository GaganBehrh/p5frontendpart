import React from "react";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoggedinPic from "../../../components/LoggedinPic";

const Post = (props) => {
    const {
        pk,
        profile_id,
        profile_image,
        username,
    } = props;

    return (
        <Card >
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <LoggedinPic src={profile_image} height={55} />

                    </Link>
                </Media>
            </Card.Body>
        </Card>
    );
};

export default Post;
