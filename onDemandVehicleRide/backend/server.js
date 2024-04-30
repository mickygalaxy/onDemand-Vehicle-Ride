const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Automatically parse .env file and load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import controllers
const authController = require('./controllers/authController');
const bookingController = require('./controllers/bookingController');
const cartController = require('./controllers/cartController');
const bikeController = require('./controllers/bikeController'); 
const vehicleController = require('./controllers/vehicleController');
const carCategoryController = require('./controllers/carCategoryController'); 
const paymentController = require('./controllers/paymentController'); 
const vehicleInsuranceController = require('./controllers/vehicleInsuranceController'); 
const rentalCompanyTransactionController = require('./controllers/rentalCompanyTransactionController'); 


// Authentication routes
app.post('/register', authController.register);
app.post('/login', authController.login);

// Booking routes
app.post('/bookings/create', bookingController.createBooking);
app.patch('/bookings/update-status', bookingController.updateBookingStatus);
app.get('/bookings', bookingController.getAllBookings);

// Cart routes
app.post('/cart/add-item', cartController.addItemToCart);
app.post('/cart/remove-item', cartController.removeItemFromCart);
app.get('/cart/:userId', cartController.getCartContents);

// Bike routes
app.post('/bikes', bikeController.createBike); // Create a new bike
app.get('/bikes', bikeController.getAllBikes); // Get all bikes
app.get('/bikes/:id', bikeController.getBikeById); // Get a specific bike by ID
app.patch('/bikes/:id', bikeController.updateBikeById); // Update a bike by ID
app.delete('/bikes/:id', bikeController.deleteBikeById); // Delete a bike by ID


// Vehicle routes
app.post('/vehicles', vehicleController.createVehicle); // Create a new vehicle
app.patch('/vehicles/:registrationNumber', vehicleController.updateVehicle); // Update a vehicle by registration number
app.delete('/vehicles/:registrationNumber', vehicleController.deleteVehicle); // Delete a vehicle by registration number
app.get('/providers/:providerId/vehicles', vehicleController.getAllProviderVehicles);


// Car category routes
app.post('/car-categories', carCategoryController.createCarCategory); // Create a new car category
app.patch('/car-categories/:categoryId', carCategoryController.updateCarCategory); // Update a car category by ID
app.delete('/car-categories/:categoryId', carCategoryController.deleteCarCategory); // Delete a car category by ID


// Payment detail routes
app.post('/payment-details', paymentController.createPaymentDetail); // Create a new payment detail
app.patch('/payment-details/:transactionId', paymentController.updatePaymentDetail); // Update a payment detail by transaction ID
app.delete('/payment-details/:transactionId', paymentController.deletePaymentDetail); // Delete a payment detail by transaction ID


// Vehicle insurance routes
app.post('/vehicle-insurance', vehicleInsuranceController.createVehicleInsurance); // Create a new vehicle insurance
app.patch('/vehicle-insurance/:policyId', vehicleInsuranceController.updateVehicleInsurance); // Update a vehicle insurance by policy ID
app.delete('/vehicle-insurance/:policyId', vehicleInsuranceController.deleteVehicleInsurance); // Delete a vehicle insurance by policy ID


// Rental company transaction routes
app.post('/rental-company-transactions', rentalCompanyTransactionController.createRentalCompanyTransaction); // Create a new rental company transaction
app.patch('/rental-company-transactions/:transactionId', rentalCompanyTransactionController.updateRentalCompanyTransaction); // Update a rental company transaction by transaction ID
app.delete('/rental-company-transactions/:transactionId', rentalCompanyTransactionController.deleteRentalCompanyTransaction); // Delete a rental company transaction by transaction ID

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

