import React from "react";
import { Link } from "react-router-dom";
import notFound from '../../assets/not-found.gif'
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Helmet>
            <title>Not Found</title>
        </Helmet>
      {/* Image/GIF */}
      <img
        src={notFound}
        alt="404 Not Found"
        className="w-80 h-80 object-cover shadow-2xl rounded-2xl"
      />

      {/* Text */}
      <h1 className="text-4xl font-bold text-gray-800 mt-6">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link to="/" className="btn btn-neutral text-white mt-6">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
