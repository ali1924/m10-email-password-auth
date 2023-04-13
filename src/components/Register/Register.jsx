import React, { useState } from 'react';
import './Register.css';
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        const email = event.target.value;
        // console.log(email);
        setEmail(email);
    }
    // console.log(email);

    const handlePasswordBlur = (event) => {
        const password = event.target.value;
        // console.log(password);
        setPassword(password);
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
    }
    return (
        <div className='register-form'>
            {/* <p>This is register page</p> */}
            <h2>Please Register....!!</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' required/>
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your Password' required/>
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;