import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../provider/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";

const Login = () => {


    const { userLogin, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                alert(error.code);
            });
    };

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {

            })
    };


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Helmet>
                <title>login</title>
            </Helmet>
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                {/* Login Title */}
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {/* Email Field */}
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

                    {/* Password Field */}
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
                    {/* Forgot Password Link */}
                    <div className="text-right">
                        <Link to="/auth/forgot-password" className="text-sm text-[#0A92B9] hover:text-[#183C30]">
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type="submit" className="btn btn-neutral w-full">
                            Login
                        </button>
                    </div>
                </form>

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
                        Login with Google
                    </button>
                </div>

                {/* Redirect to Register */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/auth/register" className="text-blue-500 hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
