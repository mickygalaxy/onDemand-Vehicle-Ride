import React from 'react';

const BookingPage = () => {
  const bookings = [
    {
      id: 1,
      carDetails: {
        brand: 'Toyota',
        model: 'Corolla',
        year: 2020,
        color: 'White',
        // Add more car details as needed
      },
      customerDetails: {
        name: 'John Doe',
        email: 'john@example.com',
        phoneNumber: '123-456-7890',
        // Add more customer details as needed
      },
      rentalCompanyDetails: {
        name: 'XYZ Rental Company',
        email: 'info@xyzrental.com',
        phoneNumber: '987-654-3210',
        // Add more rental company details as needed
      }
    },
    // Add more bookings as needed
  ];

  const handleRejectBooking = (bookingId) => {
    // Logic to reject the booking
  };

  const handleAcceptBooking = (bookingId) => {
    // Logic to accept the booking
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Booking Requests</h1>
      <div className="row">
        {bookings.map((booking) => (
          <div key={booking.id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Car Details</h5>
                <p>Brand: {booking.carDetails.brand}</p>
                <p>Model: {booking.carDetails.model}</p>
                <p>Year: {booking.carDetails.year}</p>
                <p>Color: {booking.carDetails.color}</p>
                {/* Add more car details here */}
                <h5 className="card-title mt-4">Customer Details</h5>
                <p>Name: {booking.customerDetails.name}</p>
                <p>Email: {booking.customerDetails.email}</p>
                <p>Phone Number: {booking.customerDetails.phoneNumber}</p>
                {/* Add more customer details here */}
                <h5 className="card-title mt-4">Rental Company Details</h5>
                <p>Name: {booking.rentalCompanyDetails.name}</p>
                <p>Email: {booking.rentalCompanyDetails.email}</p>
                <p>Phone Number: {booking.rentalCompanyDetails.phoneNumber}</p>
                {/* Add more rental company details here */}
                <div className="text-center mt-3">
                  <button className="btn btn-danger me-2" onClick={() => handleRejectBooking(booking.id)}>Reject</button>
                  <button className="btn btn-success" onClick={() => handleAcceptBooking(booking.id)}>Accept</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
