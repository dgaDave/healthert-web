import React from 'react'

const FormField = ({name, placeholder, onChange, type, text}) => {
    return (
        <>
            <label htmlFor={name} className='mt-4 mb-2 text-lg'>{text}</label>
            <input type={type} placeholder={placeholder} name={name} id={name} autoComplete='on' onChange={onChange}
                className='bg-white dark:bg-slate-900 border-[1px] border-gray-200 dark:border-slate-700 rounded-xl px-4 py-4 outline-none' />
        </>
    )
}

export default FormField