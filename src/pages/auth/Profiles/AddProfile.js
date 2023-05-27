import axios from "axios";
import React,{useState, useEffect} from "react";
import { axiosReq } from "../../../api/axioDefaults";
import { Card,Form,Row,Col,Container, Button } from 'react-bootstrap';
import styles from "../../../styles/Profile.module.css";
import appStyles from "../../../App.module.css";
import {Input,Image} from "react-bootstrap";

const AddProfile = () => {
  const [profiles,setProfiles]=useState([]);
  const [image,setImage]=useState(null);
  const [owner,setOwner]=useState("");
  const [name,setName]=useState("");
  const [created_at,setCreated_at]=useState("");
  const [updated_at,setUpdated_at]=useState("");

  return (
    <div><h1> Add Profile</h1>
  <div className="container">
  <div className="form-group">
    <div className="form-control">
    <Form.Group>
                <Form.Label>Owner</Form.Label>
                <Form.Control type="text" placeholder="Enter the name "   value={name} onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter the name of the owner" value={owner} onChange={(e)=>setOwner(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Created_at</Form.Label>
                <Form.Control type="text" placeholder="Enter the created date" value={created_at} onChange={(e)=>setCreated_at(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Updated_at</Form.Label>
                <Form.Control type="text" placeholder="Enter the updated date" value={updated_at} onChange={(e)=>setUpdated_at(e.target.value)}/>
            </Form.Group>
            <Form.Group>
        
            <Form.Label>Image</Form.Label>
             <Form.Control type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
             <img src={image} onChange={(e)=>setImage(e.target.files[0])}/>
             <Image
         
          src={image} onChange={(e)=>setImage(e.target.files[0])}/>
             </Form.Group>
            
          
           
    </div>
  </div>
  </div>
  </div>

);
};
     

export default  AddProfile;