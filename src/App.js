
import styles from './App.module.css';
import Navigationbar from "./components/Navigationbar";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <div className={styles.App}>
      <Navigationbar />
      <Container>
        <h1>Homepage</h1>
        <h1>SignIn</h1>
      </Container>
    </div>
  );
}

export default App;
