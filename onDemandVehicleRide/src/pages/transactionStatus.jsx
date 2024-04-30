import React from 'react';

const TransactionStatus = ({ paymentDetails, vehicleDetails, ownerDetails }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* First Column: Payment Details */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-primary text-white">
              Payment Details
            </div>
            <div className="card-body">
              <p>Payment Date: {paymentDetails.paymentDate}</p>
              <p>Amount: {paymentDetails.amount}</p>
              <p>Transaction ID: {paymentDetails.transactionId}</p>
              <p>Payment Method: {paymentDetails.paymentMethod}</p>
              <p>Status: {paymentDetails.status}</p>
            </div>
          </div>
        </div>

        {/* Second Column: Vehicle Details */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-primary text-white">
              Vehicle Details
            </div>
            <div className="card-body">
              <p>Vehicle Name: {vehicleDetails.vehicleName}</p>
              <p>Registration Number: {vehicleDetails.registrationNumber}</p>
              <p>Model Year: {vehicleDetails.modelYear}</p>
              <p>Mileage: {vehicleDetails.mileage}</p>
              <p>Number of Seater: {vehicleDetails.numberOfSeater}</p>
              <p>Day: {vehicleDetails.day}</p>
              <p>Cost Price: {vehicleDetails.costPrice}</p>
            </div>
          </div>
        </div>

        {/* Third Column: Owner Details */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-primary text-white">
              Owner Details
            </div>
            <div className="card-body">
              <p>Name: {ownerDetails.name}</p>
              <p>Email: {ownerDetails.email}</p>
              <p>Country: {ownerDetails.country}</p>
              <p>City: {ownerDetails.city}</p>
              <p>State: {ownerDetails.state}</p>
              <p>Address: {ownerDetails.address}</p>
              <p>Phone Number: {ownerDetails.phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionStatus;
