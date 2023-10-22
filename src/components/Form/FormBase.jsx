import React from 'react'
import { motion } from 'framer-motion'

const FormBase = ({ children, onSubmit }) => {
    return (
        <motion.form onSubmit={onSubmit} layout className='flex justify-center max-w-md w-full flex-col p-6 border-2 border-gray-200 dark:border-slate-700 rounded-2xl dark:bg-gray-800'>
            {children}
        </motion.form>
    )
}

export default FormBase