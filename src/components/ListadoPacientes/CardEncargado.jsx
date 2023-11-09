import React from 'react'
import usePic from '../../hooks/usePic'
import { useAuth } from '../../context/authContext'

const CardEncargado = ({ name, speciality }) => {

    const { user } = useAuth()
    console.log(user.uid)

    const { picUrl } = usePic(user.uid)
    console.log(picUrl)

    return (
        <button className='border-2 border-verde dark:border-slate-700 rounded-2xl w-full bg-white p-4 flex items-center transition-all duration-200 dark:bg-gray-800 hover:border-verde'>
            <img src={picUrl} alt="User image" className=" object-cover rounded-full w-10 h-10 mr-4" />
            <div className='flex flex-col items-start'>
                <p className="font-bold text-xl">{name}</p>
                <p>{speciality}</p>
            </div>
        </button>
    )
}

export default CardEncargado