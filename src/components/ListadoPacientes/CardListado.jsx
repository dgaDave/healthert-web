import React from 'react'

const CardListado = ({ img, name, speciality, age, bpm, curp, handleCardClick }) => {
    return (
        <button className='border-2 border-verde dark:border-slate-700 rounded-2xl w-full bg-white p-4 flex items-center transition-all duration-200 dark:bg-gray-800 hover:border-verde'>
            <img src="user.png" alt="User image" className="rounded-full w-10 h-10 mr-4" />
            <div className='flex flex-col items-start'>
                <p className="font-bold text-xl">{name}</p>
                {speciality ?
                    <p>{speciality}</p>
                    : <>
                        <div className='flex space-x-4'>
                            <p>Edad: {age}</p>
                            <p>BPM:{bpm} </p>
                        </div>
                        <p>CURP: {curp}</p>
                    </>
                }
            </div>
        </button>
    )
}

export default CardListado