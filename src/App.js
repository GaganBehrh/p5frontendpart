import styles from './App.module.css';
import Navigationbar from "./components/Navigationbar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import SignUpForm from './pages/auth/SignUpForm';
import Home from './pages/auth/Home';
import SignInForm from './pages/auth/SignInForm';
import CreateRecipes from './pages/auth/Recipes/CreateRecipes';
import CreateComments from './pages/auth/Recipes/CreateComments';
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import './api/axioDefaults';
import RecipeDetail from './pages/auth/Recipes/RecipeDetail';
import EditRecipes from './pages/auth/Recipes/EditRecipes';

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();


function App() {
  return (

    <div className={styles.App}>
      <Navigationbar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/Recipeposts/create" render={() => <CreateRecipes />} />
          <Route exact path="/Recipeposts/:id" render={() => <RecipeDetail />} />
          <Route exact path="/Recipeposts/:id/edit" render={() => <EditRecipes />} />
          <Route exact path="/comments/create" render={() => <CreateComments />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>

  );
}

export default App;

