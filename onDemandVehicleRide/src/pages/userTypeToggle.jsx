import React, { useState } from 'react';
import UserTypeToggle from './userTypeToggle';
import SignInProvider from './signInProvider';
import SignInCustomer from './SignInCustomer';
import SignInAdmin from './signInAdmin';

const App = () => {
  const [userType, setUserType] = useState('provider');

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  return (
    <div className="container">
      <UserTypeToggle onChange={handleUserTypeChange} />
      {userType === 'provider' && <SignInProvider />}
      {userType === 'customer' && <SignInCustomer />}
      {userType === 'admin' && <SignInAdmin />}
    </div>
  );
};

export default App;
