
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';

function Home() {
  return (
    <>

      <MDBRow>
        <MDBCol lg='4' md='6' className='mb-4'>
          <img
            src='https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?cs=srgb&dl=pexels-william-choquette-2641886.jpg&fm=jpg'
            className='img-fluid rounded-circle'
            alt=''
          />
        </MDBCol>

        <MDBCol lg='4' md='6' className='mb-4'>
          <img
            src='https://cravinghomecooked.com/wp-content/uploads/2020/11/basic-risotto-1-2.jpg'
            className='img-fluid rounded-pill'
            alt=''
          />
        </MDBCol>
        <MDBCol lg='4' md='6' className='mb-4'>
          <img
            src='https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?cs=srgb&dl=pexels-lumn-604969.jpg&fm=jpg'
            className='img-fluid rounded-circle'
            alt=''
          />
        </MDBCol>


        <MDBCol lg='4' md='6' className='mb-4'>
          <img
            src='https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            className='img-fluid rounded-circle'
            alt=''
          />
        </MDBCol>
        <MDBCol lg='4' md='6' className='mb-4'>
          <img
            src='https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?cs=srgb&dl=pexels-valeria-boltneva-842571.jpg&fm=jpg'
            className='img-fluid rounded-pill'
            alt=''
          />
        </MDBCol>
        <MDBCol lg='4' md='6' className='mb-4'>
          <img
            src='https://img.freepik.com/free-photo/vertical-view-spagetti-wooden-board-among-organic-vegetables-eggs-fallen-oil-bottle-pepper-black_140725-144563.jpg'
            className='img-fluid rounded-circle'
            alt=''
          />
        </MDBCol>
      </MDBRow>
    </>

  );
}

export default Home;
/*.............Home page initial code.............
import {
  Form,
  Button,
  Col,
  Row,
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUser";

const Home = () => {

  const setCurrentUser = useSetCurrentUser();
  const [SignInData, setSignInData] = useState({
    username: "",
    lastname: "",
    password1: "",
  });
  const { username, lastname, password } = SignInData;


  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignInData({
      ...SignInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", SignInData);
      /*Theis setcurrentuser can break the signin page*/
/*
setCurrentUser(data.user);
console.log(data.user);
console.log("call");

history.push("/");
} catch (err) {
setErrors(err.response?.data);
}
};


return (
<Row className={styles.Row}>
<Col className="my-auto py-2 p-md-2" md={12}>
  <Container className={`${appStyles.Content} p-4 `}>
    <h1 className={styles.Header}>Welcome to Recibook,explore new recipes</h1>

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label className="d-none">username</Form.Label>

        <Form.Control
          className={styles.Input}
          type="text"
          placeholder="firstname"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.username?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group controlId="lastname">
        <Form.Label className="d-none">lastname</Form.Label>

        <Form.Control
          className={styles.Input}
          type="text"
          placeholder="lastname"
          name="lastname"
          value={lastname}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.lastname?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group controlId="password">
        <Form.Label className="d-none">Password</Form.Label>
        <Form.Control
          className={styles.Input}
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.password?.map((message, idx) => (
        <Alert key={idx} variant="warning">
          {message}
        </Alert>
      ))}


      <Button
        className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
        type="submit"
      >
        Sign In
      </Button>
      {errors.non_field_errors?.map((message, idx) => (
        <Alert key={idx} variant="warning" className="mt-3">
          {message}
        </Alert>
      ))}
    </Form>
  </Container>
  <Container className={`mt-3 ${appStyles.Content}`}>
    <Link className={styles.Link} to="/signup">
      Donot have an account? Feel free to <span>Sign up</span>
    </Link>
  </Container>

</Col>
</Row>
);
};*/
/*-----------------Initial code ends here-------------*/
