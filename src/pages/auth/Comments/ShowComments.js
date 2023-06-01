import axios from "axios";
import React, { useState, useEffect } from "react";
import { axiosReq, axiosRes } from "../../../api/axioDefaults";
import { Card, Form, Row, Col, Container, Button } from 'react-bootstrap';
import styles from "../../../styles/Profile.module.css";
import appStyles from "../../../App.module.css";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const ShowComments = () => {
    const [comments, setComments] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const getComments = async () => {
            try {
                const { data } = await axiosReq.get(`/Recipecomment/`);
                console.log(data);
                setComments(data);


            } catch (err) {
                console.log(err);
            }
        };
        getComments();
    }, []);

    return (
        <>
            <div className={styles.grid}>
                {
                    comments.map((comment, index) => (
                        <Card className="grid" style={{ width: '22em' }}>
                            <Card.Body>

                                <Form.Group>
                                    <Form.Label>Owner</Form.Label>
                                    <Form.Control type="text" className="" value={comment.name} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control type="text" col={6} value={comment.subject} />
                                </Form.Group>
                                <Button variant="primary" onClick={() => history.push(`/Recipecomment/${comment.id}/`)}>View Details</Button>{' '}
                               
                            </Card.Body>
                        </Card>
                    ))

                }
            </div>
        </>

    );
};


export default ShowComments;