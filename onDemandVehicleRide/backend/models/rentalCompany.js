const mongoose = require('mongoose');

const rentalCompanySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  companyRegistrationNumber: { type: String, required: true },
  location: { type: String },
  state: { type: String },
  address: { type: String },
  postalCode: { type: String },
  companyEmailId: { type: String },
  companyPhoneNumber: { type: String }
});

module.exports = mongoose.model('RentalCompany', rentalCompanySchema);
