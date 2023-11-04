import React from 'react'
import FormNewPatient from '../Form/FormNewPatient'
import { motion } from 'framer-motion'

const ModalNewPatient = ({ handleVisibilityChange }) => {

    return (
        <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='h-screen w-screen absolute flex justify-center items-center z-[100]'>
            <div onClick={handleVisibilityChange} className='h-screen w-screen backdrop-blur-sm absolute bg-black/80 -z-10'></div>
            <FormNewPatient  />
        </motion.div>
    )
}

export default ModalNewPatient