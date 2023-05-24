import styles from './App.module.css';
import Navigationbar from "./components/Navigationbar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import SignUpForm from './pages/auth/SignUpForm';
import Home from './pages/auth/Home';
import HomePage from './pages/auth/HomePage';
import SignInForm from './pages/auth/SignInForm';
import CreateRecipes from './pages/auth/Recipes/CreateRecipes';
import AddRecipeTrial from './pages/auth/Recipes/AddRecipeTrial';
import CreateComments from './pages/auth/Recipes/CreateComments';
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import './api/axioDefaults';
import RecipeDetail from './pages/auth/Recipes/RecipeDetail';
import EditRecipeTrial from './pages/auth/Recipes/EditRecipeTrial';
import RecipePostsPage from './pages/auth/Recipes/RecipePostsPage';
import { useCurrentUser } from './contexts/CurrentUser';
import ShowProfiles from './pages/auth/Profiles/ShowProfiles';


export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();


function App() {
  const CurrentUser = useCurrentUser();
  const profile_id = CurrentUser?.profile_id || "";
  return (

    <div className={styles.App}>
      <Navigationbar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/recipepostspage" render={() => <RecipePostsPage />} />
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/home" render={() => <HomePage />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/Recipeposts/create" render={() => <CreateRecipes />} />
          <Route exact path="/Recipeposts/add" render={() => <AddRecipeTrial />} />
          <Route exact path="/Recipeposts/:id" render={() => <RecipeDetail />} />
          <Route exact path="/Recipeposts/:id/edit" render={() => <EditRecipeTrial />} />
          <Route exact path="/comments/create" render={() => <CreateComments />} />
          <Route exact path="/showprofiles" render={() => <ShowProfiles /> } />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>

  );
}

export default App;

