import React, { useState } from 'react';
import axios from 'axios';

const CompleteForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyRegistrationNumber: '',
    location: '',
    state: '',
    address: '',
    postalCode: '',
    companyEmailId: '',
    companyPhoneNumber: '',
    firstName: '',
    lastName: '',
    emailId: '',
    phoneNumber: '',
    aadharCardNumber: '',
    drivingLicense: '',
    panCardNumber: '',
    rentalCompanyId: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/submit', formData);
      console.log('Data submitted successfully:', response.data);
      setLoading(false);
      // Optionally, reset the form after submission
      setFormData({
        companyName: '',
        companyRegistrationNumber: '',
        location: '',
        state: '',
        address: '',
        postalCode: '',
        companyEmailId: '',
        companyPhoneNumber: '',
        firstName: '',
        lastName: '',
        emailId: '',
        phoneNumber: '',
        aadharCardNumber: '',
        drivingLicense: '',
        panCardNumber: '',
        rentalCompanyId: ''
      });
    } catch (error) {
      console.error('Error submitting data:', error);
      setLoading(false);
      setError('Error submitting data. Please try again.');
    }
  };

  return (
    <div>
      <h2>Complete Form</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        {/* Company Fields */}
        <h3>Company Information</h3>
        <label>Company Name:</label>
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
        {/* Add more input fields for company information */}

        {/* Personal Information */}
        <h3>Personal Information</h3>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {/* Add more input fields for personal information */}

        {/* Additional Information */}
        <h3>Additional Information</h3>
        <label>Aadhar Card Number:</label>
        <input type="text" name="aadharCardNumber" value={formData.aadharCardNumber} onChange={handleChange} />
        {/* Add more input fields for additional information */}

        <button type="submit" className="btn btn-primary" disabled={loading}>Submit</button>
      </form>
    </div>
  );
};

export default CompleteForm;
