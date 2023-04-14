import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification} from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { Link } from 'react-router-dom';
const Register = () => {
    const auth = getAuth(app);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleEmailChange = (event) => {
        const email = event.target.value;
        // console.log(email);
        // setEmail(email);
    }
    // console.log(email);

    const handlePasswordBlur = (event) => {
        const password = event.target.value;
        // console.log(password);
        // setPassword(password);
    }
    // console.log(password);

    const handleSubmit = (event) => {
        // 1. prevent refresh page
        event.preventDefault();
        setSuccess('');
        setError('');
        // const form = event.target;
        // console.log(event.target.email.value);
        // console.log(form.password.value);
        // 2. collect from data
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log('email:', email);
        // console.log('password:', password);
        // password validation
        // if (!/(?=.*[A-Z])/.test(password)) {
        //     setError('Please at least one uppercase letter');
        //     return;
        // }


        // 3. create new user in firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                sendVerificationEmail(loggedUser);

                // form
                const form = event.target;
                form.reset();
                setSuccess('User has created Successfully');
                // alert(success)
            })
            .catch(error => {
                // console.error(error);
                setError(error.message);
                // setSuccess('');
        })
    }
    const sendVerificationEmail = (user) => {
        sendEmailVerification(user).then(() => {
            alert("please verify your email")
        })
    }
    const handleShowPassword = ()=>{
        
    }
    return (
        <div className='register-form'>
            {/* <p>This is register page</p> */}
            <h2>Please Register....!!</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' required/>
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your Password' required />
                <br />
                <button onClick={handleShowPassword}>show password</button>
                <br />
                <input type="submit" value="Register" />
            </form>
            <p color='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
            <p>Already have an account ? Please
                <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Register;