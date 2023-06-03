import styles from './App.module.css';
import Navigationbar from "./components/Navigationbar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import SignUpForm from './pages/auth/SignUpForm';
import HomePage from './pages/auth/HomePage';
import SignInForm from './pages/auth/SignInForm';
import CreateRecipes from './pages/auth/Recipes/CreateRecipes';
import AddRecipe from './pages/auth/Recipes/AddRecipe';

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import './api/axioDefaults';
import RecipeDetail from './pages/auth/Recipes/RecipeDetail';
import EditRecipe from './pages/auth/Recipes/EditRecipe';
import ShowRecipes from './pages/auth/Recipes/ShowRecipes';
import { useCurrentUser } from './contexts/CurrentUser';
import ShowProfiles from './pages/auth/Profiles/ShowProfiles';
import AddComments from './pages/auth/Comments/AddComments';
import ShowComments from './pages/auth/Comments/ShowComments';
import EditComment from './pages/auth/Comments/EditComment';
import ProfileDetails from './pages/auth/Profiles/ProfileDetails';
import EditProfile from './pages/auth/Profiles/EditProfile';

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
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/home" render={() => <HomePage />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/Recipeposts/create" render={() => <CreateRecipes />} />
          <Route exact path="/Recipeposts/add" render={() => <AddRecipe />} />
          // <Route exact path="/Recipeposts/:id" render={() => <RecipeDetail />} />
          <Route exact path="/Recipeposts/:id/edit" render={() => <EditRecipe />} />
          <Route exact path="/Recipecomment/:id/" render={() => <EditComment />} />
          <Route exact path="/profiles/:id/" render={() => <EditProfile />} />
          <Route exact path="/showprofiles" render={() => <ShowProfiles />} />
          <Route exact path="/addcomment" render={() => <AddComments />} />
          <Route exact path="/showcomments" render={() => <ShowComments />} />
          <Route exact path="/showrecipes" render={() => <ShowRecipes />} />
          <Route exact path="/profiledetails" render={() => <ProfileDetails />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>

  );
}

export default App;

