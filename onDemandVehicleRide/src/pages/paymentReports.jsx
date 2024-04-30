import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentReportPage = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('YOUR_BACKEND_ENDPOINT/payments');
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Payment Report</h1>
      <div className="row">
        {payments.map((payment) => (
          <div key={payment.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                {/* Payment Details */}
                <h5 className="card-title">Payment Details</h5>
                <p>Transaction ID: {payment.transactionId}</p>
                <p>Payment Method: {payment.paymentMethod}</p>
                <p>Amount: {payment.amount}</p>
                {/* Add more payment details as needed */}

                {/* Company Details */}
                <h5 className="card-title mt-4">Company Details</h5>
                <p>Company Reg. No.: {payment.companyRegNumber}</p>
                <p>Company Email: {payment.companyEmail}</p>
                <p>Country: {payment.companyCountry}</p>
                <p>City: {payment.companyCity}</p>
                <p>State: {payment.companyState}</p>
                <p>Company Phone No.: {payment.companyPhoneNumber}</p>
                {/* Add more company details as needed */}

                {/* Vehicle Details */}
                <h5 className="card-title mt-4">Vehicle Details</h5>
                <p>Registration Number: {payment.registrationNumber}</p>
                <p>Model Year: {payment.modelYear}</p>
                <p>Mileage: {payment.mileage}</p>
                <p>Number of Seats: {payment.numSeats}</p>
                <p>Day: {payment.day}</p>
                <p>Cost Price: {payment.costPrice}</p>
                {/* Add more vehicle details as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentReportPage;
