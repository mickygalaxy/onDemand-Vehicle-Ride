import React from 'react';

const Button = ({ onClick, children, variant }) => {
  return (
    <button 
      onClick={onClick} 
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        backgroundColor: variant === 'primary' ? '#007bff' : '#ccc',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        marginRight: '10px',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
