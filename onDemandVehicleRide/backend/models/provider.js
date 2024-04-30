const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  pinCode: { type: String, required: true },
  country: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  emailId: { type: String, required: true },
  dob: { type: Date },
  password: { type: String, required: true },
  aadharCardNumber: { type: String },
  aadharCardImage: {type:String},
  drivingLicense: { type: String },
  drivingLicenseImage: {type: String},
  profilePhoto: { type: String },
  userType: { type: String }
});

module.exports = mongoose.model('Provider', providerSchema);
