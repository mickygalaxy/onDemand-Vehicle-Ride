import React from 'react';
import { Link } from 'react-router-dom';

const UploadMenu = () => {
  return (
    <>
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
              <Link className="nav-link" to="/upload">Upload</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <Link to="/upload-vehicle" className="btn btn-primary btn-lg">Upload Vehicle</Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default UploadMenu;
