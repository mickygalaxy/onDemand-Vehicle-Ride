import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VehicleMenu = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch vehicles from backend when component mounts
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('YOUR_BACKEND_ENDPOINT/vehicles');
        setVehicles(response.data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };
    fetchVehicles();
  }, []);

  return (
    <div className="container mt-5">
      {/* Filter Button */}
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-primary">Filter</button>
      </div>

      {/* Vehicle Cards */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {vehicles.map((vehicle, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <div className="card-body">
                {/* First Column: Vehicle Details */}
                <div className="mb-3">
                  <img src={vehicle.image} alt="Vehicle" className="card-img-top" />
                </div>
                <h5 className="card-title">{vehicle.vehicleName}</h5>
                <p className="card-text">Registration Number: {vehicle.registrationNumber}</p>
                <p className="card-text">Model Name: {vehicle.modelName}</p>
                <p className="card-text">Mileage: {vehicle.mileage}</p>
                <p className="card-text">Number of Seaters: {vehicle.numberOfSeaters}</p>
                <p className="card-text">Day: {vehicle.day}</p>
                <p className="card-text">Cost Price: {vehicle.costPrice}</p>
                <p className="card-text">Late Fee: {vehicle.lateFee}</p>
              </div>
              {/* Second Column: Owner Details */}
              <div className="card-footer">
                <h6 className="card-subtitle mb-2 text-muted">Owner Details</h6>
                <p className="card-text">Name: {vehicle.owner.name}</p>
                <p className="card-text">Email: {vehicle.owner.email}</p>
                <p className="card-text">Country: {vehicle.owner.country}</p>
                <p className="card-text">City: {vehicle.owner.city}</p>
                <p className="card-text">State: {vehicle.owner.state}</p>
                <p className="card-text">Address: {vehicle.owner.address}</p>
                <p className="card-text">Mobile Number: {vehicle.owner.mobileNumber}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Button */}
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>
  );
};

export default VehicleMenu;
