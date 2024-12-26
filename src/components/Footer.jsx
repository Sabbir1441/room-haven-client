import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-800 text-white">
            {/* Contact Info */}
            <div>
                <h3 className="text-xl font-bold">Room Haven</h3>
                <p>
                    Your perfect stay, made simple. <br />
                    Cox's Bazar, Bangladesh
                </p>
                <p>Email: info@roomhaven.com</p>
                <p>Phone: +880 1789 922623</p>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="text-lg font-bold">Quick Links</h4>
                <ul className="space-y-2">
                    <li><Link to="/rooms" className="link link-hover">Rooms</Link></li>
                    <li><Link to="/my-bookings" className="link link-hover">My Bookings</Link></li>
                    <li><Link to="/contact" className="link link-hover">Contact Us</Link></li>
                    <li><Link to="/about" className="link link-hover">About Us</Link></li>
                </ul>
            </div>

            {/* Social Media */}
            <div>
                <h4 className="text-lg font-bold">Follow Us</h4>
                <div className="flex space-x-4 mt-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.483V14.708h-3.128v-3.62h3.128V8.354c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.764v2.31h3.587l-.467 3.62h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                        </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.954 4.569c-.885.385-1.83.644-2.825.759a4.92 4.92 0 002.163-2.723 9.86 9.86 0 01-3.127 1.195 4.917 4.917 0 00-8.38 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.708.869 3.214 2.188 4.099a4.904 4.904 0 01-2.229-.616v.061c0 2.385 1.697 4.374 3.946 4.828a4.904 4.904 0 01-2.224.085c.623 1.946 2.432 3.362 4.575 3.402a9.868 9.868 0 01-6.102 2.105c-.396 0-.79-.023-1.175-.067a13.945 13.945 0 007.548 2.212c9.056 0 14.002-7.514 14.002-14.028 0-.213 0-.425-.015-.637A10.025 10.025 0 0024 4.59z" />
                        </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.338 3.608 1.313.975.975 1.251 2.242 1.313 3.608.058 1.266.07 1.646.07 4.847 0 3.204-.012 3.584-.07 4.85-.062 1.366-.338 2.633-1.313 3.608-.975.975-2.242 1.251-3.608 1.313-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.847-.07-1.366-.062-2.633-.338-3.608-1.313-.975-.975-1.251-2.242-1.313-3.608-.058-1.266-.07-1.646-.07-4.85 0-3.204.012-3.584.07-4.847.062-1.366.338-2.633 1.313-3.608.975-.975 2.242-1.251 3.608-1.313C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072c-1.607.071-3.062.322-4.202 1.462-1.14 1.14-1.391 2.595-1.462 4.202C1.013 8.332 1 8.741 1 12c0 3.259.013 3.668.072 4.948.071 1.607.322 3.062 1.462 4.202 1.14 1.14 2.595 1.391 4.202 1.462 1.28.059 1.688.072 4.948.072 3.259 0 3.668-.013 4.947-.072 1.607-.071 3.062-.322 4.202-1.462 1.14-1.14 1.391-2.595 1.462-4.202.059-1.28.072-1.688.072-4.947 0-3.259-.013-3.668-.072-4.947-.071-1.607-.322-3.062-1.462-4.202-1.14-1.14-2.595-1.391-4.202-1.462C15.668.013 15.259 0 12 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
