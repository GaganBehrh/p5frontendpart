import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";
import Asset from "../../../components/Asset";
import RecipePostTrial from "./RecipePost.js";
import { useLocation } from "react-router";
import appStyles from "../../../App.module.css";
import NoResults from "../../../media/no-results.png"; import Form from "react-bootstrap/Form";

function RecipePostsPage(message) {
  const [posts, setPosts] = useState({ results: [] });
  console.log(posts);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/Recipeposts/`);
        console.log(data);
        setPosts({ ...posts, results: data });
        console.log(posts);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPosts();
  }, [pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <h1>Discover your recipes here</h1>
        {hasLoaded ? (
          <>
            {posts?.results?.length ? (
              posts?.results.map((post) => (
                <RecipePostTrial key={post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}

      </Col>
    </Row>
  );
}

export default RecipePostsPage;