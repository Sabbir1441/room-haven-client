import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../../provider/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";


const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photoURL');
        const password = form.get('password');

        // password validation
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const isValidLength = password.length >= 6;

        if (!hasUpperCase) {
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }
        if (!hasLowerCase) {
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }
        if (!isValidLength) {
            toast.error("Password must be at least 6 characters long.");
            return;
        };

        console.log("All validations passed:", name, email, password, photo);

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/');
                    })
                    .catch((err) => {
                    });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                navigate("/");
            })
            .catch(error => {

            })
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Create an Account
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photoURL"
                            name="photoURL"
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter a photo URL"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type="submit" className="btn btn-neutral w-full">
                            Register
                        </button>
                    </div>
                </form>
                <ToastContainer />
                {/* Google Login */}
                <div className="mt-4 text-center">
                    <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
                        <svg
                            className="w-5 h-5 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="#EA4335"
                                d="M24 9.5c3.4 0 6.2 1.1 8.4 3.2l6.3-6.3C34.6 3 29.8 1 24 1 14.7 1 6.9 6.6 3.5 14.4l7.4 5.7C12.6 13.1 17.8 9.5 24 9.5z"
                            />
                            <path
                                fill="#4285F4"
                                d="M47.5 24.3c0-1.5-.1-3-.3-4.4H24v8.4h13.3c-.6 3.5-2.5 6.4-5.4 8.4l7.4 5.7c4.3-4 6.8-10 6.8-17.1z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M3.5 14.4c-1.6 3.1-2.5 6.5-2.5 10.1s.9 7 2.5 10.1l7.4-5.7c-1.1-2.4-1.8-5-1.8-7.9s.6-5.4 1.8-7.9L3.5 14.4z"
                            />
                            <path
                                fill="#34A853"
                                d="M24 47c6.5 0 11.9-2.1 15.8-5.7l-7.4-5.7c-2.1 1.4-4.8 2.3-8.4 2.3-6.2 0-11.4-3.6-13.9-8.8l-7.4 5.7c3.4 7.8 11.2 13.4 21.2 13.4z"
                            />
                        </svg>
                        Sign Up with Google
                    </button>
                </div>

                {/* Redirect to Login */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="/auth/login" className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
