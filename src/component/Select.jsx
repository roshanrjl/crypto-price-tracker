import React, { useId } from "react";

const Select = React.forwardRef(function Select(
  { option = [], className = "", label, ...props },
  ref
) {
  const id = useId();

  return (
    <div className="flex items-center gap-x-3">
      {label && (
        <label
          htmlFor={id}
          className="font-medium text-gray-700 dark:text-gray-200 shrink-0"
        >
          {label}
        </label>
      )}

      <select
        id={id}
        ref={ref}
        {...props}
        className={`w-auto px-4 py-2 text-white bg-blue-300 border border-transparent rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${className}`}
      >
        {option.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;