import React, { useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
        })
        .catch(error=>{
            console.log(error.message)
        })


    }
    return (
        <div>
            <h2 className='text-center'>Register</h2>
            <Container className='mx-auto w-25'>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name='name' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='mx-auto'>
                        Register
                    </Button> <br />
                    <Form.Text>Already have an account? <Link to="/login">Login</Link> </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;