
import React, { Component, useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";
import { useCurrentUser } from "../../../contexts/CurrentUser";
import RecipePost from "./RecipePost.js";
import appStyles from "../../../App.module.css";

function RecipeDetail() {
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const [post, setPost] = useState({ results: [] });
  const [comments, setComments] = useState({ results: [] });
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: postarray }, { data: comments }] = await Promise.all([
          axiosReq.get(`/Recipeposts/${id}/`),
          axiosReq.get(`/Recipecomment/`),
        ]);
        setPost({ ...post, results: [postarray] });
        setComments(comments);

      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <RecipePost {...post.results[0]} setPosts={setPost} postPage />
      </Col>
    </Row>
  );
}

export default RecipeDetail;

