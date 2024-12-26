import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import AuthContext from '../../provider/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

const RoomDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [bookingData, setBookingData] = useState(null);
    const [userEmail, setUserEmail] = useState(""); // User's email (can be from authentication)

    useEffect(() => {
        // Fetch room details from the server
        fetch(`http://localhost:5000/rooms/${id}`)
            .then((res) => res.json())
            .then((data) => setRoom(data))
            .catch((error) => console.error('Error loading room details:', error));

        // Here you would set the logged-in user email from authentication context or state
        setUserEmail("user@example.com"); // Example email, replace with actual authenticated email
    }, [id]);

    const handleBooking = () => {
        // Ensure the room is available before allowing booking
        if (room.availability) {
            const bookingInfo = {
                roomId: room._id,
                image: room.image,
                roomName: room.name,
                price: room.price,
                bookingDate: selectedDate,
                email: user?.email, // Send logged-in user's email
            };

            // Send booking data to the server
            fetch('http://localhost:5000/book-room', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingInfo),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    // Show confirmation toast
                    toast.success('Room booked successfully!');
                    // Update room availability to false after booking
                    setRoom((prevRoom) => ({ ...prevRoom, availability: false }));
                    setShowModal(false); // Close modal
                })
                .catch((error) => {
                    console.error('Error booking room:', error);
                    toast.error('Booking failed. Please try again.');
                });
        } else {
            toast.error('This room is no longer available.');
        }
    };

    if (!room) {
        return <p>Loading room details...</p>;
    }

    return (
        <div className="container mx-auto px-4 my-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Room Image Section */}
                <div className="relative h-96">
                    <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-lg">
                        ${room.price} / Night
                    </div>
                </div>

                {/* Room Details Section */}
                <div className="p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{room.name}</h1>
                    <p className="text-gray-500 mb-2 text-lg">Location: {room.location}</p>
                    <p className="text-gray-500 mb-6 text-lg">Type: {room.type}</p>

                    {/* Facilities */}
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Facilities</h2>
                    <ul className="list-disc list-inside text-gray-600 mb-6">
                        {room.facilities.map((facility, index) => (
                            <li key={index} className="text-lg">{facility}</li>
                        ))}
                    </ul>

                    {/* Rating and Reviews */}
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-yellow-500 text-xl font-semibold">Rating: {room.rating} ⭐</p>
                        <p className="text-gray-600 text-lg">Total Reviews: {room.reviews}</p>
                    </div>

                    {/* Availability */}
                    <p
                        className={`text-lg font-semibold ${room.availability ? 'text-green-600' : 'text-red-600'
                            }`}
                    >
                        {room.availability ? 'Available for Booking' : 'Not Available'}
                    </p>

                    {/* Description */}
                    <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Description</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {
                            'This room offers the perfect combination of comfort and elegance...'}
                    </p>

                    {/* Book Now Button */}
                    <button
                        className="bg-blue-600 text-white px-6 py-3 rounded-full mt-6 hover:bg-blue-700"
                        onClick={() => setShowModal(true)}
                    >
                        Book Now
                    </button>
                </div>
            </div>

            {/* Booking Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-2xl shadow-xl w-[600px] max-w-full">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Booking Summary</h2>

                        {/* Room Name and Price */}
                        <div className="mb-4">
                            <p className="text-lg text-gray-600 mb-2">Room: <span className="font-semibold text-gray-800">{room.name}</span></p>
                            <p className="text-lg text-gray-600">Price: <span className="font-semibold text-green-600">${room.price} per night</span></p>
                        </div>

                        {/* User Email */}
                        <div className="mb-4">
                            <p className="text-lg text-gray-600 mb-2">User: <span className="font-semibold text-gray-800">{user?.email}</span></p>
                        </div>

                        {/* Booking Date Picker */}
                        <div className="mb-4">
                            <label className="block text-lg text-gray-600 mb-2">Select Booking Date</label>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="MMMM d, yyyy"
                                className="border border-gray-300 rounded-lg p-3 w-full"
                                minDate={new Date()} // Disable past dates
                                placeholderText="Select a date"
                            />
                        </div>

                        {/* Modal Actions */}
                        <div className="mt-6 flex justify-end gap-4">
                            <button
                                className="bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-500 transition-all duration-200"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
                                onClick={handleBooking}
                            >
                                Confirm Booking
                            </button>
                        </div>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={true}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>
                </div>
            )}

        </div>
    );
};

export default RoomDetails;
