import axios from "axios";
import React,{useState, useEffect} from "react";
import { axiosReq } from "../../../api/axioDefaults";
import { Card,Form,Row,Col,Container, Button } from 'react-bootstrap';
import styles from "../../../styles/Profile.module.css";
import appStyles from "../../../App.module.css";

const ShowComments = () => {
  const [profiles,setProfiles]=useState([]);

  useEffect(() => {
    const getComments = async () => {
        try {
            const { data } = await axiosReq.get(`/Recipecomment/`);
            console.log(data);
            setProfiles(data);
               

        } catch (err) {
            console.log(err);
        }
    };
    getComments();
  }, []);

  return (
    <> <Container>
    <h1>Discover your website comments</h1>
</Container>
   
<div className={styles.grid}>
        {
            profiles.map((profile, index) => (
                <Card className="grid" style={{ width: '22em' }}>
                <Card.Body>
                
            <Form.Group>
                <Form.Label>Owner</Form.Label>
                <Form.Control type="text" className=""  value={profile.name} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control type="text" col={6}  value={profile.subject} />
            </Form.Group>
            <Button variant="primary" >View Details</Button>{' '}
                </Card.Body>
                </Card>
            ))
           
        }
         </div>
         </>

);
};
     

export default ShowComments;