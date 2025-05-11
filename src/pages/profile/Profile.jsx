import { useContext } from "react";
import AuthContext from "../../provider/AuthContext";

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10 px-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden">
                {/* Top Banner */}
                <div className="h-40 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative">
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                        <img
                            className="w-32 h-32 rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
                            src={user?.photoURL}
                            alt="Profile"
                        />
                    </div>
                </div>

                {/* Profile Info */}
                <div className="mt-20 text-center px-6 pb-10">
                    <h1 className="text-3xl font-bold text-gray-800 mb-1 hover:text-[#0A92B9] transition duration-300">
                        {user?.displayName || "Unnamed User"}
                    </h1>
                    <p className="text-gray-500 mb-2 text-sm">
                        {user?.email}
                    </p>
                    <p className="text-xs text-gray-400">
                        Email Verified:{" "}
                        <span className={`font-semibold ${user?.emailVerified ? "text-green-500" : "text-red-500"}`}>
                            {user?.emailVerified ? "Yes" : "No"}
                        </span>
                    </p>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-sm text-gray-600">
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-1">User Info:</h3>
                            <ul className="space-y-1">
                                <li><span className="font-medium">Name:</span> {user?.displayName || "Not Provided"}</li>
                                <li><span className="font-medium">Email:</span> {user?.email}</li>
                                <li><span className="font-medium">Email Verified:</span> {user?.emailVerified ? "Yes" : "No"}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 mb-1">Account Details:</h3>
                            <ul className="space-y-1">
                                <li><span className="font-medium">Photo URL:</span> {user?.photoURL || "Not Provided"}</li>
                                <li><span className="font-medium">Creation Time:</span> N/A (Need metadata)</li>
                                <li><span className="font-medium">Role:</span> User</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="px-6 py-2 bg-[#0A92B9] hover:bg-[#3866c9] text-white font-semibold rounded-full transition duration-300 shadow-md">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
