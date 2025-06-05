import React from 'react'

function Button({
    label,
    className = '',
    type = 'button',
    ...props
}) {
  return (
    <button
      
      type={type}
      className={`inline-block  px-6 py-2 duration-200  rounded-full ${className}`}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button