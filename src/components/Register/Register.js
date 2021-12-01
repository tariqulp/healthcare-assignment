import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const { handleEmail, handlePassword, error, signUpUsingEmailPassword, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const reDirect_uri = location.state?.from || '/';

    // Google Sign in Authentication
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(reDirect_uri)
            })

    }
    return (
        <div className='my-5'>
            {/* sign up through email and password */}
            <Form onSubmit={signUpUsingEmailPassword}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword1">
                    <Form.Label column sm="2">
                        First Name:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="input" placeholder="FirstName" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword2">
                    <Form.Label column sm="2">
                        Second Name:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="input" placeholder="SecondName" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onBlur={handleEmail} type="email" placeholder="email@example.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Col>
                    <div className="text-danger"><p>{error}</p></div>
                    <button className='btn-regular'>Sign Up</button>
                </Form.Group>
                <p>Already have an account? <Link to="/login">Sign In</Link></p>
                -------------or------------ <br /> <br />
                <Button onClick={handleGoogleLogIn}>Google Sign In</Button>

            </Form>
        </div>
    );
};

export default Register;