import React, { useId } from 'react';

function Input(
  {
    label,
    type = 'text',
    placeholder,
    className = '',
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-1 text-sm font-medium text-black">
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 rounded-md bg-gray-100 text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Input);
