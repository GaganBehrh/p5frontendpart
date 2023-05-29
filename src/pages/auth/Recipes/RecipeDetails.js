import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosReq } from "../../../api/axioDefaults";

const RecipeDetails = () => {

const [recipe, setRecipe] = useState({ results: [] });

const {id} = useParams();
const history = useHistory();

/*useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: postarray }] = await Promise.all([
            axiosReq.get(`/Recipeposts/${data.id}/`)
            
          ]);
        setRecipe(({ ...recipe, results: [postarray] }));

      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);*/

  useEffect(() => {
    const getRecipes = async () => {
        try {
            const { data } = await axiosReq.get(`/Recipeposts/${recipe.id}/`);
            console.log(data);
           // setRecipe(data);
            history.push(`/Recipeposts/${recipe.id}`)

               

        } catch (err) {
            console.log(err);
        }
    };
    getRecipes();
  }, []);

const deleteUser = async (id) => {
    await axios.delete(`https://p5djangobackend.herokuapp.com/Recipepeosts/${id}/`)
    history.push("/")
}

    return (
        <div>
            <h2>Detail of Single Profile </h2>
            <hr></hr>
            <div className="full-profile-detail">
               
                <div >
                    <p>{recipe.id}</p>
                    <p>{recipe.name}</p>
               
                </div> 
            </div>

            <Link className="btn btn-outline-primary mr-2">Update</Link>
          
        </div>
    );
};

export default RecipeDetails;
//history.push(`/Recipeposts/${data.id}`)