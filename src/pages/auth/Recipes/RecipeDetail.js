
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";
import RecipePost from "../Recipes/RecipePost";
import CreateComments from "../Recipes/CreateComments";
import CreateCommentsTrial1 from "../Recipes/CreateCommentsTrial1";
import RecipePostTrial from "./RecipePostTrial.js";

function RecipeDetail() {
  const { id } = useParams();

  const [post, setPost] = useState({ results: [] });


  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: postarray }] = await Promise.all([
          axiosReq.get(`/Recipeposts/${id}/`),
        ]);
        setPost({ ...post, results: [postarray] });

      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <RecipePostTrial {...post.results[0]} setPosts={setPost} postPage />
        
      </Col>
    </Row>
  );
}

export default RecipeDetail;
/* 
  <Recipepost {...post.results[0]} setPosts={setPost} postPage />
  <RecipePost {...RecipePost.results[0]} setRecipePosts={setRecipePost} postPage />
  New Line
   <RecipePost {...post.results[0]} setPosts={setPost} postPage />
  */

