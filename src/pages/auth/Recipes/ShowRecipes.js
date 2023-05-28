import axios from "axios";
import React,{useState, useEffect} from "react";
import { axiosReq } from "../../../api/axioDefaults";
import { Card,Form,Row,Col,Container, Button } from 'react-bootstrap';
import styles from "../../../styles/Profile.module.css";
import appStyles from "../../../App.module.css";

const ShowRecipes = () => {
  const [profiles,setProfiles]=useState([]);

  useEffect(() => {
    const getProfiles = async () => {
        try {
            const { data } = await axiosReq.get(`/Recipeposts/`);
            console.log(data);
            setProfiles(data);
               

        } catch (err) {
            console.log(err);
        }
    };
    getProfiles();
  }, []);

  return (
    <> <Container>
    <h1>Discover your recipes here</h1>
</Container>
<div className={styles.grid}>
        {
            profiles.map((profile, index) => (
                <Card className="grid" style={{ width: '22em' }}>

                <Card.Img src={"https://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-395x500.jpg"} alt="RecipeImage" width={150}
        height={150} />

                <Card.Body>
                <Form.Group>
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" col={6}  value={profile.id} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Owner</Form.Label>
                <Form.Control type="text" className=""  value={profile.name} />
            </Form.Group>
            <Form.Group>
                <Form.Label>matter</Form.Label>
                <Form.Control type="text" className=""  value={profile.matter} />
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
     

export default ShowRecipes;