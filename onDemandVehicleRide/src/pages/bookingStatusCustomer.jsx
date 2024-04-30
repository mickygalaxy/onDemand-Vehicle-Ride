import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingStatus = () => {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    // Fetch booking data from backend when component mounts
    const fetchBookingData = async () => {
      try {
        const response = await axios.get('YOUR_BACKEND_ENDPOINT/booking');
        setBookingData(response.data);
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };
    fetchBookingData();
  }, []);

  return (
    <div className="container mt-5">
      {/* Render booking data */}
      {bookingData && (
        <div className="row">
          {/* First Column: Vehicle Details */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                Vehicle Details
              </div>
              <div className="card-body">
                <p>Vehicle Name: {bookingData.vehicleName}</p>
                <p>Registration Number: {bookingData.registrationNumber}</p>
                <p>Model Year: {bookingData.modelYear}</p>
                <p>Mileage: {bookingData.mileage}</p>
                <p>Number of Seater: {bookingData.numberOfSeater}</p>
                <p>Day: {bookingData.day}</p>
                <p>Cost Price: {bookingData.costPrice}</p>
                <p>Late Fee: {bookingData.lateFee}</p>
              </div>
            </div>
          </div>

          {/* Second Column: Owner Details */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                Owner Details
              </div>
              <div className="card-body">
                <p>Name: {bookingData.owner.name}</p>
                <p>Email: {bookingData.owner.email}</p>
                <p>Country: {bookingData.owner.country}</p>
                <p>City: {bookingData.owner.city}</p>
                <p>State: {bookingData.owner.state}</p>
                <p>Address: {bookingData.owner.address}</p>
                <p>Mobile Number: {bookingData.owner.mobileNumber}</p>
              </div>
            </div>
          </div>
          {/* Button Section */}
          <div className="d-flex justify-content-center mt-3">
           <button className="btn btn-warning me-2" disabled>Booking Accepted</button>
           <button className="btn btn-dark">Payment</button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default BookingStatus;
