import axios from "axios";
import React, { useState, useEffect } from "react";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";
import { Card, Form, Row, Col, Container, Button } from 'react-bootstrap';
import styles from "../../../styles/Profile.module.css";
import appStyles from "../../../App.module.css";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
const ShowProfiles = () => {
    const [profiles, setProfiles] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        const getProfiles = async () => {
            try {
                const { data } = await axiosReq.get(`/profiles/`);
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
            <h1>Discover all profiles here</h1>
        </Container>

            <div className={styles.grid}>
                {
                    profiles.map((profile, index) => (
                        <Card className="grid" style={{ width: '22em' }}>

                            <Card.Img src={profile.image} width={150}
                                height={150} />

                            <Card.Body>
                                <Form.Group>
                                    <Form.Label>Id</Form.Label>
                                    <Form.Control type="text" col={6} value={profile.id} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" className="" value={profile.name} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control type="text" className="" value={profile.content} />
                                </Form.Group>
                              
                                <Button variant="primary" onClick={() => history.push(`/profiles/${profile.id}/`)}>View Details</Button>{' '}
                            </Card.Body>
                        </Card>
                    ))

                }
            </div>
        </>

    );
};


export default ShowProfiles;