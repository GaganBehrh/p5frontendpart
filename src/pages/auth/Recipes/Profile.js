import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";
import {
    useProfileData,
    useSetProfileData,
} from "../../../contexts/ProfileDataContext";

import Container from "react-bootstrap/Container";

import Asset from "../../../components/Asset";

import styles from "../../../styles/Profile.module.css";
import appStyles from "../../../App.module.css";
import btnStyles from "../../../styles/Button.module.css";

import { useCurrentUser } from "../../../contexts/CurrentUser";
import { useParams } from "react-router";
import { Form,Button, Image } from "react-bootstrap";

const ProfilePage=(props)=> {
    let {
        
        name,
        content,
        owner,
        profile_id,
        profile_image,
        username,
    } = props;
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const id = useParams();
    const setProfileData = useSetProfileData();
    //const { pageProfile } = useProfileData();

    const [posts, setPosts] = useState({ results: [] });

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axiosReq.get(`/profiles/`);
                console.log(data);
                setPosts(data);
                console.log(posts);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };

        setHasLoaded(false);
        fetchPosts();
    });
    

    return (
        <Row className={styles.Row} >
            <Col className="my-auto py-2 p-md-2" md={12} >
                <Container className={`${appStyles.Content} p-4 `}>
                    <Form>
                        <Form.Group>
                            <Form.Label>UserName < /Form.Label>
                                < Form.Control type="text" col={6}  name="name" value={owner} />
                       </Form.Group>
                     
                        <Form.Group>
                            <Form.Label>Content < /Form.Label>
                                < Form.Control type="text" col={6}  name="name" value={content} />
                       </Form.Group>
                       
                          
                                < Button variant="outline-success" > Cancel < /Button>{' '}

                                    < /Form>
                                    < /Container>

                                    < /Col>
                                    < /Row>
       
    );
}

export default ProfilePage;