import React, { useState } from 'react';
import axios from 'axios';

const SignInCustomer = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/signin/customer', formData);
      console.log('Customer signed in successfully:', response.data);
      setLoading(false);
      // Optionally, redirect the user to a new page or update the UI
    } catch (error) {
      console.error('Error signing in as customer:', error);
      setLoading(false);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Sign In as Customer</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>Sign In</button>
      </form>
    </div>
  );
};

export default SignInCustomer;
