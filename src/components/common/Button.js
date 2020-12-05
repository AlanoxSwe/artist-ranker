import React from 'react';

const Button = ({
  label,
  className = 'btn btn-primary',
  type = 'button',
  ...rest
}) => {
  return (
    <button type={type} className={className} {...rest}>
      {label}
    </button>
  );
};

export default Button;
