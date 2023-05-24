import axios from "axios";
import React,{useState, useEffect} from "react";
import { axiosReq } from "../../../api/axioDefaults";
import { Card, Button } from 'react-bootstrap';
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

                    <Card.Title>Id:{profile.id}</Card.Title>
                    <Card.Text> {profile.owner} </Card.Text>
                  

                </Card.Body>
                </Card>
            ))

        }
        </div>
       
        
    </div>
);
};
     

export default ShowProfiles;