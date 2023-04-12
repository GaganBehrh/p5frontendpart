import React from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";


const RecipeImage = ({ spinner, src, message }) => {
    return (

        <div className="m-3">

            <input className="d-none" type="file" />
            <Button variant="outline-success">Upload</Button>
        </div>

    );
};

export default RecipeImage;