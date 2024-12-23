import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                {/* Login Title */}
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

                {/* Login Form */}
                <form className="mt-6 space-y-4">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
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
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type="submit" className="btn btn-neutral w-full">
                            Login
                        </button>
                    </div>
                </form>

                {/* Social Login */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">Or login with</p>
                    <div className="flex justify-center space-x-4 mt-3">
                        {/* Google Login */}
                        <button className="btn btn-neutral btn-secondary text-white ">
                            Google
                        </button>
                        
                    </div>
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
