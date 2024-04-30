import React from 'react';

const VehicleCard = ({ vehicle }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', width: '300px' }}>
      <h3>{vehicle.model}</h3>
      <p>Registration Number: {vehicle.registrationNumber}</p>
      <p>Model Year: {vehicle.modelYear}</p>
      <p>Mileage: {vehicle.mileage}</p>
      <p>Availability: {vehicle.availabilityFlag ? 'Available' : 'Not Available'}</p>
      {/* Add more vehicle details as needed */}
    </div>
  );
};

export default VehicleCard;
