import React from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
/*
function RecipeImage(){
    fileSelectedHandler= event=>{
    console.log(event);   }


/*
const RecipeImage = ({ spinner, src, message }) => {
    
    }
    return (
        

        <div className="m-3">

            <input className="d-none" type="file" />
            <Button variant="outline-success">Upload</Button>
            <input type="file" />
        </div>

    );*/
    /*
    return (
        <input type="file" onChange={this.fileSelectedHandler
        }/>

    );

};


export default RecipeImage;*/


const RecipeImage = ({ spinner, src, message }) => {
  return (
    <div className={`p-4`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default RecipeImage;