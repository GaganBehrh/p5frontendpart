import React from "react";
import { Spinner } from "react-bootstrap";


const Asset = ({ spinner, src, message }) => {
  return (
    <div >
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;