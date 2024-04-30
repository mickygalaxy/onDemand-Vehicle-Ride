const Vehicle = require('../models/vehicle');

// Create a new vehicle
exports.createVehicle = async (req, res) => {
  try {
    const {
      registrationNumber,
      availabilityFlag,
      modelYear,
      model,
      mileage,
      vehicleImage,
      vehicleSegment,
      ownerId
    } = req.body;
    const vehicle = new Vehicle({
      registrationNumber,
      availabilityFlag,
      modelYear,
      model,
      mileage,
      vehicleImage,
      vehicleSegment,
      ownerId
    });
    await vehicle.save();
    res.status(201).json({ message: 'Vehicle created successfully', vehicle });
  } catch (error) {
    console.error('Error creating vehicle:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an existing vehicle
exports.updateVehicle = async (req, res) => {
  try {
    const registrationNumber = req.params.registrationNumber;
    const updates = req.body;
    const options = { new: true }; // Return the updated vehicle
    const updatedVehicle = await Vehicle.findOneAndUpdate({ registrationNumber }, updates, options);
    if (!updatedVehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.status(200).json({ message: 'Vehicle updated successfully', vehicle: updatedVehicle });
  } catch (error) {
    console.error('Error updating vehicle:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a vehicle
exports.deleteVehicle = async (req, res) => {
  try {
    const registrationNumber = req.params.registrationNumber;
    const deletedVehicle = await Vehicle.findOneAndDelete({ registrationNumber });
    if (!deletedVehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.status(200).json({ message: 'Vehicle deleted successfully', vehicle: deletedVehicle });
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

