
import styles from './App.module.css';
import Navigationbar from "./components/Navigationbar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className={styles.App}>
      <Navigationbar />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
