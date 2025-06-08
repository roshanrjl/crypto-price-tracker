import React from 'react';

function Button({
  label,
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
