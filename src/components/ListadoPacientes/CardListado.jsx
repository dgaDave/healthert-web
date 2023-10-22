import React from 'react'

const CardListado = ({ img, name, speciality, age, bpm, curp, onClick }) => {
    return (
        <button onClick={onClick} className='border-2 border-verde dark:border-slate-700 rounded-2xl bg-white p-2.5 mb-6 flex items-center transition-all dark:bg-gray-800'>
            <img src="user.png" alt="User image" className="rounded-full w-10 h-10 mr-4" />
            <div className='flex flex-col items-start'>
                <p className="font-bold text-xl">{name}</p>
                <p>{speciality}</p>
            </div>
        </button>
    )
}

export default CardListado