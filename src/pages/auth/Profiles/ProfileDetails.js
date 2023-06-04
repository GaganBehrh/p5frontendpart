import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosReq } from "../../../api/axioDefaults";
const ProfileDetails = () => {
const [profile, setProfile] = useState([])
const {id} = useParams();
const history = useHistory();
 useEffect(() => {
    const getProfiles = async () => {
        try {
            const { data } = await axiosReq.get(`/profiles/${id}`);
            console.log(data);
            setProfile(data);
        } catch (err) {
            console.log(err);
        }
    };
    getProfiles();
  }, []);

const deleteUser = async (id) => {
    await axios.delete(`profiles/${id}/`)
    history.push("/")
}

    return (
        <div>
            <h2>Detail of Single Profile </h2>
            <hr></hr>
            <div className="full-profile-detail">
                <img src={profile.image} height="300" width="500"/>
                <div className="student-detail">
                    <p>{profile.id}</p>
                    <p>{profile.name}</p>
                    <p>{profile.owner}</p>
                    <p>{profile.created_at}</p>
                    <p>{profile.updated_at}</p>
                   
                </div> 
            </div>
            <Link className="btn btn-outline-primary mr-2">Update</Link>
            <Link className="btn btn-danger" onClick={() => deleteUser(profile.id)}>Delete</Link>
        </div>
    );
};

export default ProfileDetails;