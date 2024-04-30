const mongoose = require('mongoose');

const vehicleInsuranceSchema = new mongoose.Schema({
  policyId: { type: String, required: true, unique: true },
  insuranceName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  paymentDate: { type: Date },
  costPerDay: { type: Number, required: true },
  vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true }, // Reference to Vehicle model
});

module.exports = mongoose.model('VehicleInsurance', vehicleInsuranceSchema);
