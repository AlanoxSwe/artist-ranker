import React from 'react';

const Input = ({ label, name, type = 'text', ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} className="form-control" id={name} {...rest} />
    </div>
  );
};

export default Input;
