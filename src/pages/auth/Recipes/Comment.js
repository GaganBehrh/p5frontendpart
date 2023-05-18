import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";


const Comment = (props) => {
    const { profile_id, profile_image, owner, updated_at, content } = props;

    return (
        <div>
            <hr />
            <Media>

                <Media.Body className="align-self-center ml-2">
                    <span >{owner}</span>
                    <p>{content}</p>
                </Media.Body>
            </Media>
        </div>
    );
};

export default Comment;