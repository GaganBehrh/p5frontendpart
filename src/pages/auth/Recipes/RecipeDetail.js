
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";
import RecipePost from "../Recipes/RecipePost";

function RecipeDetail() {
  const { id } = useParams();
  const [Recipepost, setRecipePost] = useState({ results: [] });
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: Recipepost }] = await Promise.all([
          axiosReq.get(`/Recipeposts/${id}`),
        ]);
        setRecipePost({ results: [Recipepost] });
        console.log(Recipepost);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <RecipePost {...RecipePost.results[0]} setRecipePosts={setRecipePost} postPage />
        <Container >
          Comments
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default RecipeDetail;

