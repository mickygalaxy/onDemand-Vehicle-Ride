import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        // Clear session/local storage or perform any other logout logic
        //redirect to the login page
        localStorage.removeItem('accessToken'); // Clear access token from local storage
        // Redirect to the login page
        window.location.href = '/login';
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src="/logo.png" alt="Logo" className="navbar-logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* Navigation Links */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/booking">Booking</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/payment">Payment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/report">Report</Link>
                        </li>
                        {/* User Avatar Icon */}
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" onClick={toggleDropdown}>
                                <FaUserCircle className="user-avatar" />
                            </a>
                            {showDropdown && (
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/profile">Profile</Link>
                                    <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
