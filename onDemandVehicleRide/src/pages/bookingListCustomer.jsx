import React from 'react';

const BookingList = ({ bookings }) => {
  return (
    <div className="container mt-5">
      {/* Mapping over bookings array to render each booking */}
      {bookings.map((booking, index) => (
        <div key={index} className="card mb-3">
          <div className="card-header bg-primary text-white">
            Booking #{index + 1}
          </div>
          <div className="card-body">
            <div className="row">
              {/* First Column: Vehicle Details */}
              <div className="col-md-6">
                <h5>Vehicle Details</h5>
                <p>Vehicle Name: {booking.vehicleName}</p>
                <p>Registration Number: {booking.registrationNumber}</p>
                <p>Model Year: {booking.modelYear}</p>
                <p>Mileage: {booking.mileage}</p>
                <p>Number of Seater: {booking.numberOfSeater}</p>
                <p>Day: {booking.day}</p>
                <p>Cost Price: {booking.costPrice}</p>
              </div>
              {/* Second Column: Owner Details */}
              <div className="col-md-6">
                <h5>Owner Details</h5>
                <p>Name: {booking.owner.name}</p>
                <p>Email: {booking.owner.email}</p>
                <p>Country: {booking.owner.country}</p>
                <p>City: {booking.owner.city}</p>
                <p>State: {booking.owner.state}</p>
                <p>Address: {booking.owner.address}</p>
                <p>Phone Number: {booking.owner.phoneNumber}</p>
              </div>
            </div>
            {/* Rental and Return Dates */}
            <div className="row mt-3">
              <div className="col-md-6">
                <p>Rental Date: {booking.rentalDate}</p>
              </div>
              <div className="col-md-6">
                <p>Return Date: {booking.returnDate}</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            {/* Right Tick Mark */}
            <div className="float-end">&#10004;</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
