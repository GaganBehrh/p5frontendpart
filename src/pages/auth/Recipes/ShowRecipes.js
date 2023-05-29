import axios from "axios";
import React,{useState, useEffect} from "react";
import { axiosReq } from "../../../api/axioDefaults";
import { Card,Form,Row,Col,Container, Button } from 'react-bootstrap';
import styles from "../../../styles/Profile.module.css";
import appStyles from "../../../App.module.css";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const ShowRecipes = () => {
  const [recipes,setRecipes]=useState([]);
  const {id}=useParams();
  const history=useHistory();


  useEffect(() => {
    const getRecipes = async () => {
        try {
            const { data } = await axiosReq.get(`/Recipeposts/`);
            console.log(data);
            setRecipes(data);
        
               

        } catch (err) {
            console.log(err);
        }
    };
    getRecipes();
  }, []);

  return (
    <> <Container>
    <h1>Discover your recipes here</h1>
</Container>
<div className={styles.grid}>
        {
            recipes.map((recipe, index) => (
                <Card className="grid" style={{ width: '22em' }}>

                <Card.Img src={"https://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-395x500.jpg"} alt="RecipeImage" width={150}
        height={150} />

                <Card.Body>
                <Form.Group>
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" col={6}  value={recipe.id} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Owner</Form.Label>
                <Form.Control type="text" className=""  value={recipe.name} />
            </Form.Group>
            <Form.Group>
                <Form.Label>matter</Form.Label>
                <Form.Control type="text" className=""  value={recipe.matter} />
            </Form.Group>
            <Button variant="primary" onClick={() => history.push(`/Recipeposts/${recipe.id}/`)}>View Details</Button>{' '}
                </Card.Body>
                </Card>
            ))
           
        }
         </div>
         </>

);
};
     

export default ShowRecipes;