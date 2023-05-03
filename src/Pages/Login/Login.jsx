import React, { useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';


const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);

    const from = location.state?.from?.pathname || 'category/0';

    const handleLogin =(event) =>{
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace:true})
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <h2 className='text-center'>Login</h2>
            <Container className='mx-auto w-25'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='mx-auto'>
                        Login
                    </Button> <br />
                    <Form.Text>Do not have an account? <Link to="/register">Register</Link> </Form.Text>
                </Form>
            </Container>

        </div>
    );
};

export default Login;