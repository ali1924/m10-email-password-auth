import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../../firebase/firebase.init';
const Register = () => {
    const auth = getAuth(app);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

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
        event.preventDefault();
        // const form = event.target;
        // console.log(event.target.email.value);
        // console.log(form.password.value);
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log('email:', email);
        console.log('password:', password);
        // create new user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.error(error);
        })
    }
    return (
        <div className='register-form'>
            {/* <p>This is register page</p> */}
            <h2>Please Register....!!</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;