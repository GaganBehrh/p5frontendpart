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
import { Button, Image } from "react-bootstrap";

function ProfilePage() {
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
    const mainProfile = (
        <>
            <Row noGutters className="px-3 text-center">
                <Col lg={3} className="text-lg-left">

                </Col>
                <Col lg={6}>
                    <h3 className="m-2">Profile username</h3>
                    <p>Profile stats</p>
                </Col>
                <Col lg={3} className="text-lg-right">
                    <p>Follow button</p>
                </Col>
                <Col className="p-3">Profile content</Col>
            </Row>
        </>
    );

    const mainProfilePosts = (
        <>
            <hr />
            <p className="text-center">Profile owner's posts</p>
            <hr />
        </>
    );

    return (
        <Row>
            <Col className="py-2 p-0 p-lg-2" lg={8}>

                {mainProfile}
                {mainProfilePosts}

            </Col>
        </Row>
    );
}

export default ProfilePage;