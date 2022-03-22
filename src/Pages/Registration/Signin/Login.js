
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
// import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [user, setUser] = useState({});
    const { loginUser, googleLogIn, error } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser)
    }
    const handleUserLogIn = e => {
        e.preventDefault();
        loginUser(user.email, user.password, location, navigate);
        alert("User Login Successful")
    }
    const handleGoogleLogIn = () => {
        googleLogIn(location, navigate);
    }
    const handleGoToRegister = () => {
        navigate("/signup")
    }
    return (
        <div className="sign-in-page text-center mt-5">
            <h1 style={{ color: "#ff6b6b" }}>Login Here</h1>

            <form onSubmit={handleUserLogIn} className="login-form signup-form">

                <input
                    required
                    placeholder="Your Email"
                    type="email"
                    onChange={handleOnChange}
                    name="email"
                    className="input-field form-control"
                />
                <input
                    required
                    placeholder="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    className="input-field form-control my-3"

                />

                <input type="submit" className="btn-submit" />
            </form>

            <img onClick={handleGoogleLogIn} width="50px" src="https://i.ibb.co/RSDyLbz/download.png" alt="googleLogo" style={{ cursor: "pointer" }} />

            <h2 style={{ color: "#222f3e" }}>Already Registered ? Click <span onClick={handleGoToRegister} style={{ color: "#341f97", cursor: "pointer" }}>Here</span> to Sign in</h2>
        </div>
    );
};

export default Login;