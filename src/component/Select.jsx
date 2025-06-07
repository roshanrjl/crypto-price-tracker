import React,{useId} from 'react'

function Select({
    option =[],
    className="",
    label,
    ...props
} ,ref) {
  const id = useId()
    return (
    <div className='w-full'>
        {label&& <label htmlFor={id} className=''>{label}</label>}
        <select
        {...props}
        ref={ref}
        className={` block w-full md:w-auto px-4 py-2 text-white bg-blue-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${className}`}
        >
            {option?.map((item, index)=>(
                <option key={index} value={item}>
                    {item}
                </option>
            ))}

        </select>
    </div>
  )
}

export default React.forwardRef(Select)