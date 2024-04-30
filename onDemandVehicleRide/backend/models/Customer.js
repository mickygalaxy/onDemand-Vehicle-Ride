const mongoose = require('mongoose');
const companyEmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailId: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  location: { type: String },
  aadharCardNumber: { type: String },
  aadharCardImage: {type:String},
  drivingLicense: { type: String },
  drivingLicenseImage: {type: String},
  state: { type: String },
  address: { type: String },
  postalCode: { type: String },
  panCardNumber: { type: String },
  rentalCompanyId: { type: mongoose.Schema.Types.ObjectId, ref: 'rentalCompany' }
});

module.exports = mongoose.model('CompanyEmployee', companyEmployeeSchema);
