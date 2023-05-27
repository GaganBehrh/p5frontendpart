import axios from "axios";
import React,{useState, useEffect} from "react";
import { axiosReq } from "../../../api/axioDefaults";
import {useHistory } from "react-router-dom";
import { Card,Form,Row,Col,Container, Button } from 'react-bootstrap';
import styles from "../../../styles/Profile.module.css";
import appStyles from "../../../App.module.css";
import {Input,Image} from "react-bootstrap";

const AddProfile = () => {

  const [image,setImage]=useState(null);
  const [owner,setOwner]=useState("");
  const [name,setName]=useState("");
  const [content,setContent]=useState("");
  const [created_at,setCreated_at]=useState("");
  const [updated_at,setUpdated_at]=useState("");
  const history = useHistory();
  const [errors, setErrors] = useState({});


  const AddProfile = async (event) => {
    event.preventDefault();
    console.log("call");
    let formData = new FormData();
    formData.append("owner", owner);
    formData.append("name", name);
    formData.append("content", content);
    //formData.append("pic", imageInput.current.files[0]);
    formData.append("created_at", created_at);
    formData.append("updated_at", updated_at);

    try {
      const { data } = await axiosReq.post("/profiles/", formData);
      console.log(data);
      history.push(`/showprofiles`);

    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
        console.log("errorcall");
      }
    }
  };


  return (
    <div><h1> Add Profile</h1>
  <div className="container">
  <div className="form-group">
    <div className="form-control">
    <Form onSubmit={AddProfile}>

    <Form.Group>
                <Form.Label>Owner</Form.Label>
                <Form.Control type="text" placeholder="Enter the name "   value={name} onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter the name of the owner" value={owner} onChange={(e)=>setOwner(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control type="text" placeholder="Enter the content" value={content} onChange={(e)=>setContent(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Created_at</Form.Label>
                <Form.Control type="text" placeholder="Enter the created date" value={created_at} onChange={(e)=>setCreated_at(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Updated_at</Form.Label>
                <Form.Control type="text" placeholder="Enter the updated date" value={updated_at} onChange={(e)=>setUpdated_at(e.target.value)}/>
            </Form.Group>
          
            <Button variant="outline-success" type="submit">Add Profile</Button>{' '}
            
          </Form>
           
    </div>
  </div>
  </div>
  </div>

);
};
     

export default  AddProfile;