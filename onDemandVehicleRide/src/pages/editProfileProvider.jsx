import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    mobileNumber: '',
    pinCode: '',
    country: '',
    address: '',
    state: '',
    emailId: '',
    dob: '',
    aadharCardNumber: '',
    drivingLicense: '',
    profilePhoto: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch provider data from backend when component mounts
    axios.get('/api/provider')
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching provider data:', error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Update provider data on backend
    axios.put('/api/provider', formData)
      .then(response => {
        console.log('Provider updated successfully:', response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error updating provider:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        <label>Mobile Number:</label>
        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
        <label>Pin Code:</label>
        <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} />
        <label>Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
        <label>State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} />
        <label>Email:</label>
        <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} />
        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        <label>Aadhar Card Number:</label>
        <input type="text" name="aadharCardNumber" value={formData.aadharCardNumber} onChange={handleChange} />
        <label>Driving License:</label>
        <input type="text" name="drivingLicense" value={formData.drivingLicense} onChange={handleChange} />
        <label>Profile Photo:</label>
        <input type="file" name="profilePhoto" onChange={handleChange} />
        <button type="submit" disabled={loading}>Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfilePage;
