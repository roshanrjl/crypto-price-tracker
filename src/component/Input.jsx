import React ,  {useId} from 'react'

function Input({
    label,
    type="text",
    placeholder,
    className='',
    ...props
} ,ref) {
    const id =useId()
  return (
    
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1 ' htmlFor={id}>{label}</label>}
        <input 
        type={type}
        className={`${className}`}
        ref={ref}
        {...props}
        id={id}
        />

    </div>
  )
}

export default React.forwardRef(Input)