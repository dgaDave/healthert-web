import React from 'react'
import { useState } from 'react'

const Prueba = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClickIsOpen = () => {
        setIsOpen(!isOpen)
    }
    return ( /* nombre, curp, edad, peso, altura, grupS, genero, numSeg, alergias, padecimientos */
        <>
            <div className={`flex absolute w-3/4 bottom-0 right-0 p-5 transition  bg-orange-500 ${isOpen ? 'h-2/5' : ' h-1/6'}`}>
                <div className='absolute -top-7 md:-top-9 rounded-full border-2 border-verde hover:scale-110 transition duration-300'>
                    <img className='w-12 md:w-16' src='/src/assets/images/logo/logo.png'></img>
                </div>
                <div className='flex  md:text-lg'>
                    <div className='flex-row'>
                        <div className='flex pt-1 md:pt-4  text-md'>
                            Jairo Irineo Gonzalez Caravantes<br />
                            GOCJ020416HMNNRRA7
                        </div>
                        <div className={`flex pt-2  text-md ${isOpen ? '' : 'hidden'}`}>
                            Genero Masculino
                        </div>
                        <div className={`flex pt-2  text-md ${isOpen ? '' : 'hidden'}`}>
                            NNS: 20120989
                        </div>
                        <div className={`flex pt-2  text-md ${isOpen ? '' : 'hidden'}`}>
                            21 años  85 Kg  180 cm
                        </div>

                    </div>
                    <div className={`flex-row ${isOpen ? '' : 'hidden'}`}>
                        <div className='flex justify-start pt-4'>
                            <p className='font-semibold'>Alergias:</p>
                        </div>
                        <div className='grid justify-start pt-4  px-1'>
                            {
                                alergia.map((alergia, index) =>
                                    <li key={index}>{alergia}</li>)
                            }
                        </div>
                    </div>
                    <div className={`flex-row ${isOpen ? '' : 'hidden'}`}>
                        <div className='flex justify-start pt-4'>
                            <p className='font-semibold'>Padecimientos:</p>
                        </div>
                        <div className='grid justify-start pt-4  px-1'>
                            {
                                padecimiento.map((padecimiento, index) =>
                                <li key={index}>{padecimiento}</li>)
                            }
                        </div>
                    </div>
                </div>
                <div className={`absolute top-2 right-2 bg-verde px-2 py-1 rounded-xl hover:bg-red-600 transition duration-700 ${isOpen ? 'rotate-0' : 'rotate-180'}`} onClick={handleClickIsOpen}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 md:h-9 md:w-9 fill-black dark:fill-white' viewBox='0 0 16 16'>
                        <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                    </svg>
                </div>

            </div>
        </>
    )
}

export default Prueba
