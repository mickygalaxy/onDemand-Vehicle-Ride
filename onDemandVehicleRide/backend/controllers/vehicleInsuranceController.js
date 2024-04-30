const VehicleInsurance = require('../models/vehicleInsurance');

// Create a new vehicle insurance
exports.createVehicleInsurance = async (req, res) => {
  try {
    const { policyId, insuranceName, startDate, endDate, paymentDate, costPerDay, vehicleId } = req.body;
    const vehicleInsurance = new VehicleInsurance({
      policyId,
      insuranceName,
      startDate,
      endDate,
      paymentDate,
      costPerDay,
      vehicleId
    });
    await vehicleInsurance.save();
    res.status(201).json({ message: 'Vehicle insurance created successfully', vehicleInsurance });
  } catch (error) {
    console.error('Error creating vehicle insurance:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an existing vehicle insurance
exports.updateVehicleInsurance = async (req, res) => {
  try {
    const policyId = req.params.policyId;
    const updates = req.body;
    const options = { new: true }; // Return the updated vehicle insurance
    const updatedVehicleInsurance = await VehicleInsurance.findOneAndUpdate({ policyId }, updates, options);
    if (!updatedVehicleInsurance) {
      return res.status(404).json({ error: 'Vehicle insurance not found' });
    }
    res.status(200).json({ message: 'Vehicle insurance updated successfully', vehicleInsurance: updatedVehicleInsurance });
  } catch (error) {
    console.error('Error updating vehicle insurance:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a vehicle insurance
exports.deleteVehicleInsurance = async (req, res) => {
  try {
    const policyId = req.params.policyId;
    const deletedVehicleInsurance = await VehicleInsurance.findOneAndDelete({ policyId });
    if (!deletedVehicleInsurance) {
      return res.status(404).json({ error: 'Vehicle insurance not found' });
    }
    res.status(200).json({ message: 'Vehicle insurance deleted successfully', vehicleInsurance: deletedVehicleInsurance });
  } catch (error) {
    console.error('Error deleting vehicle insurance:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
