import React from 'react'
import { motion } from 'framer-motion'

const FileField = ({ name, placeholder, onChange, text }) => {
    return (
        <>
            <motion.label layout htmlFor={name} className='mt-4 mb-2 text-lg'>{text}</motion.label>
            <motion.input required layout type='file' accept='image/*' placeholder={placeholder} name={name} id={name} autoComplete='on' onChange={onChange}
                className='bg-white dark:bg-slate-900 border-[1px] border-gray-200 transition-all duration-200 focus:ring-2 focus:ring-verde dark:border-slate-700 rounded-xl px-4 py-4 outline-none' />
        </>
    )
}

export default FileField