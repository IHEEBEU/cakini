import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'; // Import jwt_decode from 'jwt-decode' library

function Authentication({ changehome, current, regist, currentuser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to your server for authentication
            const response = await axios.post('https://deployingbec.vercel.app/login', {
                email: email.toLowerCase(),
                password: password,
            });

            if (response.data && response.data.token) {
                // If authentication is successful, set the token in local storage
                localStorage.setItem('token', response.data.token);

                // Decode the token to get user information
                const user = jwt_decode(response.data.token); // Use jwt_decode to decode the token

                // Set the user in your state or context
                currentuser(user);
                changehome();
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Login failed');
        }
    };

    return (
        <div className='body-auth'>
            <form action="" className="form_main">
                <p className="heading">Login</p>
                <div className="inputContainer">
                    <input
                        type="text"
                        className="inputField"
                        id="username"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="inputContainer">
                    <input
                        type="password"
                        className="inputField"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="buttonn" onClick={handleLogin} style={{color:"black"}}>
                    Submit
                </button>
                <button className='buttonn' onClick={(event) => { event.preventDefault(); regist(); }} style={{color:"black"}}>
                    Sign up
                </button>

                <a className="forgotLink" href="#">
                    Forgot your password?
                </a>
            </form>
        </div>
    );
}

export default Authentication;
