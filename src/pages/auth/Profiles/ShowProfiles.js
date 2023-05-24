import axios from "axios";
import React,{useState, useEffect} from "react";
import { axiosReq } from "../../../api/axioDefaults";
import { Card,Form, Button } from 'react-bootstrap';
const ShowProfiles = () => {
  const [profiles,setProfiles]=useState([]);

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
    <div>

        <div >
        {
            profiles.map((profile, index) => (
                <Card className="m-3 rounded shadow-lg main-students-show" style={{ width: '22em' }}>

                <Card.Img src={profile.image}  width={171}
        height={180} />

                <Card.Body>
                <Form.Group>
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" col={6}  value={profile.id} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Owner</Form.Label>
                <Form.Control type="text" col={6}  value={profile.owner} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Created at</Form.Label>
                <Form.Control type="text" col={6}  value={profile.created_at} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Updated at</Form.Label>
                <Form.Control type="text" col={6}  value={profile.updated_at} />
            </Form.Group>
                </Card.Body>
                </Card>
            ))

        }
        </div>
       
        
    </div>
);
};
     

export default ShowProfiles;