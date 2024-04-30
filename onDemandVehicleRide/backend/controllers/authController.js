const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Provider = require('../models/provider');
const RentalCompany = require('../models/rentalCompany');
const CompanyEmployee = require('../models/Customer');

// Register a new user (Provider)
exports.registerProvider = async (req, res) => {
  try {
    const {
      firstName,
      mobileNumber,
      pinCode,
      country,
      address,
      state,
      emailId,
      dob,
      password,
      aadharCardNumber,
      drivingLicense,
      userType
    } = req.body;

    // Check if the user already exists
    let existingUser = await Provider.findOne({ emailId });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const provider = new Provider({
      firstName,
      mobileNumber,
      pinCode,
      country,
      address,
      state,
      emailId,
      dob,
      password: hashedPassword,
      aadharCardNumber,
      drivingLicense,
      userType
    });

    // Save the user to the database
    await provider.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Register a new user (Rental Company)
exports.registerRentalCompany = async (req, res) => {
  try {
    const {
      companyName,
      companyRegistrationNumber,
      location,
      state,
      address,
      postalCode,
      companyEmailId,
      companyPhoneNumber
    } = req.body;

    // Check if the company already exists
    let existingCompany = await RentalCompany.findOne({ companyEmailId });
    if (existingCompany) {
      return res.status(400).json({ message: "Company already exists" });
    }

    // Create a new rental company
    const rentalCompany = new RentalCompany({
      companyName,
      companyRegistrationNumber,
      location,
      state,
      address,
      postalCode,
      companyEmailId,
      companyPhoneNumber
    });

    // Save the company to the database
    await rentalCompany.save();

    res.status(201).json({ message: 'Rental company registered successfully' });
  } catch (error) {
    console.error('Error registering rental company:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Register a new user (Company Employee)
exports.registerCompanyEmployee = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      emailId,
      phoneNumber,
      location,
      aadharCardNumber,
      drivingLicense,
      state,
      address,
      postalCode,
      panCardNumber,
      rentalCompanyId
    } = req.body;

    // Check if the employee already exists
    let existingEmployee = await CompanyEmployee.findOne({ emailId });
    if (existingEmployee) {
      return res.status(400).json({ message: "Employee already exists" });
    }

    // Create a new company employee
    const companyEmployee = new CompanyEmployee({
      firstName,
      lastName,
      emailId,
      phoneNumber,
      location,
      aadharCardNumber,
      drivingLicense,
      state,
      address,
      postalCode,
      panCardNumber,
      rentalCompanyId
    });

    // Save the employee to the database
    await companyEmployee.save();

    res.status(201).json({ message: 'Company employee registered successfully' });
  } catch (error) {
    console.error('Error registering company employee:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { emailId, password } = req.body;

    // Check if the user exists in Provider collection
    const provider = await Provider.findOne({ emailId });
    if (provider) {
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, provider.password);
      if (isPasswordValid) {
        // Generate JWT token
        const token = jwt.sign({ userId: provider._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ token });
      }
    }

    // Check if the user exists in CompanyEmployee collection
    const companyEmployee = await CompanyEmployee.findOne({ emailId });
    if (companyEmployee) {
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, companyEmployee.password);
      if (isPasswordValid) {
        // Generate JWT token
        const token = jwt.sign({ userId: companyEmployee._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ token });
      }
    }

    // If user not found or password incorrect, return error
    return res.status(401).json({ error: 'Invalid credentials' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
