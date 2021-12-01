import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    // distructuring data from context
    const { signInUsingEmailPassword, handleEmail, handlePassword, signInUsingGoogle, setIsLoading } = useAuth();
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const reDirect_uri = location.state?.from || '/';

    // Email and Password authentication login system
    const handleEmailPasswordLogIn = () => {
        signInUsingEmailPassword()
            .then(result => {
                // history push for stay where i left
                history.push(reDirect_uri)
            })
            .finally(() => setIsLoading(false))
            .catch(error => {
                setError(error.message)
            })

    }

    // Google Authentication Login
    const handleGoogleLogIn = () => {

        signInUsingGoogle()
            .then(result => {
                history.push(reDirect_uri)
            })
            .finally(() => setIsLoading(false))

    }
    return (
        <div className='my-5'>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onBlur={handleEmail} type="email" placeholder="email@example.com" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                    </Col>

                </Form.Group>
                <div className='text-danger'><p>{error}</p></div>
                <Button onClick={handleEmailPasswordLogIn} variant="outline-primary">Sign in</Button>
                <br />
                <br />
                <Button onClick={handleGoogleLogIn} variant="primary">Google Sign in</Button>
                <Link to='/register'><p>Create Account?</p></Link>
            </Form>
        </div>
    );
};

export default Login;