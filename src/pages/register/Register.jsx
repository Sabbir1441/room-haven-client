import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../../provider/AuthContext";


const Register = () => {

    const { createNewUser } = useContext(AuthContext);



    const handleSubmit = (e) => {
        e.preventDefault();
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
        }

        console.log("All validations passed:", name, email, password, photo);

        createNewUser(email, password)
            .then((result) => {
                console.log(result.user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
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
