import React, { useState } from 'react'

const PacienteInfoCompleta = ({ nombre, curp, edad, peso, altura, grupoSanguineo, genero, numeroSeguro, alergias, padecimientos }) => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClickIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`flex absolute w-3/4  bottom-0 right-0 px-4 pt-6 pb-6 transition-all  shadow-inner dark:bg-gray-800 ${isOpen ? 'h-[26%] ' : ' h-[15%]'}`}>
            <div className='absolute -top-7 md:-top-9 rounded-full border-2 border-verde hover:scale-110 transition duration-300'>
                <img className='w-12 md:w-16' src='/src/assets/images/logo/logo.png'></img>
            </div>
            <div className={`${isOpen && (`overflow-y-auto`)} overflow-y-hidden flex flex-col p-4 w-full text-xl h-full min-h-full`}>
                <p className='text-3xl font-semibold'>{nombre}</p>
                <div className='flex space-x-20'>
                    <p>Curp: {curp}</p>
                    <p>Grupo sanguineo: {grupoSanguineo} </p>
                    <p>Genero: {genero} </p>
                    <p>NSS: {numeroSeguro} </p>
                </div>
                {isOpen && (<>
                    <div className='flex space-x-20'>
                        <p>Edad: {edad} anos</p>
                        <p>Peso: {peso}Kg</p>
                        <p>Altura: {altura} cm</p>
                    </div>
                    <div className='flex h-fit overflow-y-auto space-x-20'>
                        <div className='inline-block'>
                            <p className='font-semibold text-2xl'>Alergias:</p>
                            <ul>
                                {alergias && (
                                    alergias.map((alergia, index) =>
                                        <li key={index}>{alergia}</li>)
                                )
                                }
                            </ul>
                        </div>
                        <div className='inline-block'>
                            <p className='font-semibold text-2xl'>Padecimientos:</p>
                            <ul>
                                {padecimientos && (
                                    padecimientos.map((alergia, index) =>
                                        <li key={index}>{alergia}</li>)
                                )
                                }
                            </ul>
                        </div>
                    </div>
                </>
                )}
            </div>
            <div className={`cursor-pointer absolute top-2 right-2 bg-verde px-2 py-1 rounded-xl hover:bg-red-600 transition duration-700 ${isOpen ? 'rotate-0' : 'rotate-180'}`} onClick={handleClickIsOpen}>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 md:h-9 md:w-9 fill-black dark:fill-white' viewBox='0 0 16 16'>
                    <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                </svg>
            </div>
        </div>
    )
}

export default PacienteInfoCompleta