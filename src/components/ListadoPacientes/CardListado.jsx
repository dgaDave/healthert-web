import React from 'react'
import useBpm from '../../hooks/useBpm'
import usePic from '../../hooks/usePic'

const CardListado = ({ pacient, handleCardClick }) => {

    const { id, nombres, curp } = pacient

    const { bpmValue } = useBpm(id)

    const { picUrl } = usePic(pacient.id)
    console.log(picUrl)


    return (
        <button onClick={() => handleCardClick(pacient)} className='border-2 border-verde dark:border-slate-700 rounded-2xl w-full bg-white p-4 flex items-center transition-all duration-200 dark:bg-gray-800 hover:border-verde'>
            <img src={picUrl} alt="User image" className="rounded-full object-cover w-10 h-10 mr-4" />
            <div className='flex flex-col items-start'>
                <p className="font-bold text-xl">{nombres}</p>
                <p>CURP: {curp}</p>
                <div className='flex space-x-4'>
                    {/* <p>Edad: {age}</p> */}
                    <p>BPM:{bpmValue} </p>
                </div>
            </div>
        </button>
    )
}

export default CardListado