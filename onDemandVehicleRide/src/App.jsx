import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import PaymentPage from './pages/PaymentPage';
import ReportPage from './pages/ReportPage';
import ProfilePage from './pages/ProfilePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import UploadVehiclePage from './pages/UploadVehiclePage';
import FilterPage from './pages/FilterPage';
import BookingStatusPage from './pages/BookingStatusPage';
import TransactionStatusPage from './pages/TransactionStatusPage';
import VehicleMenuPage from './pages/VehicleMenuPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/booking" component={BookingPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/report" component={ReportPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/upload-vehicle" component={UploadVehiclePage} />
          <Route path="/filter" component={FilterPage} />
          <Route path="/booking-status" component={BookingStatusPage} />
          <Route path="/transaction-status" component={TransactionStatusPage} />
          <Route path="/vehicle-menu" component={VehicleMenuPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

