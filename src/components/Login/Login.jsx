import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../firebase/firebase.init';
import { Link } from 'react-router-dom';

const Login = () => {
    const auth = getAuth(app);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();
    const handleLogin = (event) => {
        event.preventDefault();
        // console.log(event);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
        setSuccess('');

        // password validation
        if (!/(?:.*[A-Z].*[A-Z])/.test(password)) {
            setError('Please add at least one capital letter');
            return;
        }
        else if (!/(?:.*[!@#$*])/.test(password)) {
            setError('Please add at least one special character');
            return;
        }
        else if (password.length < 6) {
            setError('Password must be 6 character long');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('User login successfully')
            })
            .catch(error =>{
            setError(error.message)
        })
    }


    const handleResetPassword = (event) => {
        console.log(emailRef.current.value)
        const email = emailRef.current.value;
        if (!email) {
            alert('Please enter your correct email');
            return;
        }
        sendPasswordResetEmail(auth, email).then(() => {
            alert('please check your email')
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-primary'>Please Register...!!!</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='w-50' ref={emailRef} type="email" name="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='w-50' type="password" name="password" placeholder="Password"  required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <button onClick={handleResetPassword}>Reset password</button>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
            <p>New to this website? Please 
                <Link to="/register">Register</Link>
            </p>
        </div>
    );
};

export default Login;