import axios from "axios";
import React,{useState, useEffect} from "react";
import { axiosReq } from "../../../api/axioDefaults";
const ShowProfiles = () => {
  const [profiles,setProfiles]=useState({});

 /* const getProfiles= async()=>{
    const response=await axiosReq.get('/Recipeposts/');
    console.log(response.data);
  }

  useEffect(()=>{
    getProfiles();

  },[])*/

  useEffect(() => {
    const getProfiles = async () => {
        try {
            const { data } = await axiosReq.get(`/Recipeposts/`);
            console.log(data);
            

        } catch (err) {
            console.log(err);
        }
    };
    getProfiles();
  }, []);

  return (
    <div>fgkflgk</div>
  );

};

export default ShowProfiles;