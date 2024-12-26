import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ConnectUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here (e.g., send data to server)
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
        <Helmet>
            <title>Connect</title>
        </Helmet>
      <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-12">
        Connect with Us
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Side: Contact Info */}
        <div className="flex-1">
          <div className="bg-white p-8 rounded-xl shadow-xl text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Office</h3>
            <p className="text-lg text-gray-700 mb-4">Cox's Bazar</p>
            <p className="text-lg text-gray-700 mb-4">Phone: +880 1789 922623</p>
            <p className="text-lg text-gray-700 mb-4">Email: support@roomhaven.com</p>
            <p className="text-lg text-gray-700 mb-4">Open :  7 Days a Week</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1">
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="p-3 border-2 border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-3 border-2 border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-lg text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="p-3 border-2 border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectUs;
