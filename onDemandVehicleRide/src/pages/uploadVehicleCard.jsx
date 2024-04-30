import React, { useState } from 'react';
import axios from 'axios';

const UploadVehiclePage = () => {
  const [formData, setFormData] = useState({
    registrationNumber: '',
    availabilityFlag: '',
    modelYear: '',
    modelName: '',
    mileage: '',
    vehicleSegment: '',
    vehicleType: '',
    numberOfPerson: '',
    numberOfLuggage: '',
    day: '',
    hour: '',
    costPrice: '',
    lateFee: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      await axios.post('YOUR_BACKEND_ENDPOINT/uploadVehicle', formDataToSend);
      // Redirect or show success message
    } catch (error) {
      console.error('Error uploading vehicle:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Upload Vehicle</h1>
      <form onSubmit={handleSubmit}>
        {/* Image Upload */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Upload Image</label>
          <input type="file" className="form-control" id="image" name="image" accept="image/*" onChange={handleFileChange} required />
        </div>
        
        {/* Registration Number */}
        <div className="mb-3">
          <label htmlFor="registrationNumber" className="form-label">Registration Number</label>
          <input type="text" className="form-control" id="registrationNumber" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} required />
        </div>
        {/* Availability Flag */}
        <div className="mb-3">
          <label htmlFor="availabilityFlag" className="form-label">Availability Flag</label>
          <input type="text" className="form-control" id="availabilityFlag" name="availabilityFlag" value={formData.availabilityFlag} onChange={handleChange} required />
        </div>
        {/* Model Year */}
        <div className="mb-3">
          <label htmlFor="modelYear" className="form-label">Model Year</label>
          <input type="text" className="form-control" id="modelYear" name="modelYear" value={formData.modelYear} onChange={handleChange} required />
        </div>
        {/* Model Name */}
        <div className="mb-3">
          <label htmlFor="modelName" className="form-label">Model Name</label>
          <input type="text" className="form-control" id="modelName" name="modelName" value={formData.modelName} onChange={handleChange} required />
        </div>
        {/* Mileage */}
        <div className="mb-3">
          <label htmlFor="mileage" className="form-label">Mileage</label>
          <input type="text" className="form-control" id="mileage" name="mileage" value={formData.mileage} onChange={handleChange} required />
        </div>
        {/* Vehicle Segment */}
        <div className="mb-3">
          <label htmlFor="vehicleSegment" className="form-label">Vehicle Segment</label>
          <input type="text" className="form-control" id="vehicleSegment" name="vehicleSegment" value={formData.vehicleSegment} onChange={handleChange} required />
        </div>
        {/* Vehicle Type */}
        <div className="mb-3">
          <label htmlFor="vehicleType" className="form-label">Vehicle Type</label>
          <input type="text" className="form-control" id="vehicleType" name="vehicleType" value={formData.vehicleType} onChange={handleChange} required />
        </div>
        {/* Number of Persons */}
        <div className="mb-3">
          <label htmlFor="numberOfPerson" className="form-label">Number of Persons</label>
          <input type="text" className="form-control" id="numberOfPerson" name="numberOfPerson" value={formData.numberOfPerson} onChange={handleChange} required />
        </div>
        {/* Number of Luggage */}
        <div className="mb-3">
          <label htmlFor="numberOfLuggage" className="form-label">Number of Luggage</label>
          <input type="text" className="form-control" id="numberOfLuggage" name="numberOfLuggage" value={formData.numberOfLuggage} onChange={handleChange} required />
        </div>
        {/* Day */}
        <div className="mb-3">
          <label htmlFor="day" className="form-label">Day</label>
          <input type="text" className="form-control" id="day" name="day" value={formData.day} onChange={handleChange} required />
        </div>
        {/* Hour */}
        <div className="mb-3">
          <label htmlFor="hour" className="form-label">Hour</label>
          <input type="text" className="form-control" id="hour" name="hour" value={formData.hour} onChange={handleChange} required />
        </div>
        {/* Cost Price */}
        <div className="mb-3">
          <label htmlFor="costPrice" className="form-label">Cost Price</label>
          <input type="text" className="form-control" id="costPrice" name="costPrice" value={formData.costPrice} onChange={handleChange} required />
        </div>
        {/* Late Fee */}
        <div className="mb-3">
          <label htmlFor="lateFee" className="form-label">Late Fee</label>
          <input type="text" className="form-control" id="lateFee" name="lateFee" value={formData.lateFee} onChange={handleChange} required />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary mx-2">Upload</button>
          <button type="button" className="btn btn-secondary mx-2">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UploadVehiclePage;
