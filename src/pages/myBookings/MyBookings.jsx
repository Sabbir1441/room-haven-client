import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AuthContext from '../../provider/AuthContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showDateModal, setShowDateModal] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [review, setReview] = useState({
        rating: 5,
        comment: ''
    });

    useEffect(() => {
        fetch(`https://room-haven-server.vercel.app/bookings/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setBookings(data))
            .catch((err) => ('Error fetching bookings:', err));
    }, [user?.email]);

    const handleCancelBooking = (bookingId) => {
        fetch(`https://room-haven-server.vercel.app/cancel-booking/${bookingId}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success('Booking cancelled successfully!');
                setBookings((prevBookings) =>
                    prevBookings.filter((booking) => booking._id !== bookingId)
                );
                setShowCancelModal(false);
            })
            .catch((error) => {
                toast.error('Error cancelling booking.');
            });
    };

    const handleUpdateDate = (bookingId) => {
        const updatedBooking = {
            bookingId,
            updatedDate: selectedDate,
        };

        fetch('https://room-haven-server.vercel.app/update-booking', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedBooking),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success('Booking date updated successfully!');
                setShowDateModal(false);
                setBookings((prevBookings) =>
                    prevBookings.map((booking) =>
                        booking._id === bookingId
                            ? { ...booking, bookingDate: selectedDate }
                            : booking
                    )
                );
            })
            .catch((error) => {
                toast.error('Error updating booking date.');
            });
    };

    const handleReview = (bookingId) => {
        setSelectedBooking(bookingId);
        setShowReviewModal(true); 
    };

    const handleReviewSubmit = () => {
        const reviewData = {
            bookingId: selectedBooking,
            rating: review.rating,
            comment: review.comment,
        };

        fetch('https://room-haven-server.vercel.app/submit-review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success('Review submitted successfully!');
                setShowReviewModal(false); 
            })
            .catch((error) => {
                toast.error('Error submitting review.');
            });
    };


    return (
        <div className="container mx-auto px-4 my-10">
            <h1 className="text-4xl font-bold text-center mb-6">My Bookings</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookings.length === 0 ? (
                    <p className="col-span-3 text-center">No bookings found.</p>
                ) : (
                    bookings.map((booking) => (
                        <div key={booking._id} className="border border-gray-300 rounded-lg shadow-lg p-4">
                            <img
                                src={booking.image || 'default_image_url.jpg'} 
                                alt={booking.roomName}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold">{booking.roomName}</h3>
                            <p className="text-gray-600 mb-2">${booking.price}</p>
                            <p className="text-gray-500">{new Date(booking.bookingDate).toLocaleDateString()}</p>
                            <div className="mt-4">
                                <button
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg m-2"
                                    onClick={() => {
                                        setSelectedBooking(booking);
                                        setShowCancelModal(true);
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg m-2"
                                    onClick={() => handleReview(booking._id)}
                                >
                                    Review
                                </button>
                                <button
                                    className="bg-green-600 text-white px-4 py-2 rounded-lg m-2"
                                    onClick={() => {
                                        setSelectedBooking(booking);
                                        setShowDateModal(true);
                                    }}
                                >
                                    Update Date
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>


            {/* Review Modal */}
            {showReviewModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Submit Your Review</h2>
                        <div className="mb-4">
                            <label className="block text-gray-600">Rating</label>
                            <select
                                className="border border-gray-300 rounded p-2 w-full"
                                value={review.rating}
                                onChange={(e) => setReview({ ...review, rating: e.target.value })}
                            >
                                <option value="5">5 - Excellent</option>
                                <option value="4">4 - Good</option>
                                <option value="3">3 - Average</option>
                                <option value="2">2 - Poor</option>
                                <option value="1">1 - Terrible</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600">Comment</label>
                            <textarea
                                className="border border-gray-300 rounded p-2 w-full"
                                rows="4"
                                value={review.comment}
                                onChange={(e) => setReview({ ...review, comment: e.target.value })}
                            ></textarea>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <button
                                className="bg-gray-600 text-white px-4 py-2 rounded-full"
                                onClick={() => setShowReviewModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded-full"
                                onClick={handleReviewSubmit}
                            >
                                Submit Review
                            </button>
                        </div>
                    </div>
                </div>
            )}



            {/* Cancel Booking Modal */}
            {showCancelModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Confirm Cancellation</h2>
                        <p className="text-gray-600 mb-4">Are you sure you want to cancel this booking?</p>
                        <div className="flex justify-between">
                            <button
                                className="bg-gray-600 text-white px-4 py-2 rounded-full"
                                onClick={() => setShowCancelModal(false)}
                            >
                                No
                            </button>
                            <button
                                className="bg-red-600 text-white px-4 py-2 rounded-full"
                                onClick={() => handleCancelBooking(selectedBooking._id)}
                            >
                                Yes, Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Update Date Modal */}
            {showDateModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Update Booking Date</h2>
                        <label className="text-gray-600 mb-2">Select New Date</label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="MMMM d, yyyy"
                            className="border border-gray-300 rounded p-2 w-full"
                            minDate={new Date()} // Disable past dates
                        />
                        <div className="mt-6 flex justify-between">
                            <button
                                className="bg-gray-600 text-white px-4 py-2 rounded-full"
                                onClick={() => setShowDateModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded-full"
                                onClick={() => handleUpdateDate(selectedBooking._id)}
                            >
                                Update Date
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyBookings;