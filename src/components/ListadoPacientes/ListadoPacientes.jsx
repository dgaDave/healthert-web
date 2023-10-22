import React, { useState } from 'react';
import CardListado from './CardListado';

const MostrarDoctorYPacientes = ({ doctor, pacientes }) => {
    const [nombrePaciente, setNombrePaciente] = useState(null);

    const handleClick = (nombre) => {
        setNombrePaciente(nombre);
    }

    return (
        <>
            <div className="w-1/4 h-screen flex flex-col overflow-auto border-gray-100 p-4 dark:bg-gray-800">
                <CardListado name={doctor.nombre} speciality={doctor.especialidad} />
                <div className="overflow-y-auto">
                    {
                        pacientes.map(paciente => (
                            <CardListado key={paciente.id} name={paciente.nombre} age={paciente.edad} curp={paciente.curp} bpm={paciente.bpm} />
                        ))
                    }
                </div>
            </div><InfoCompleta nombre={nombrePaciente} curp={'GOCJ020416HMNNRRA7'} edad={'21'} peso={'78'}
                altura={'180'} grupS={'0+'} genero={'Masculino'} numSeg={'4815163078686709'} alergias={'Ibuprofeno,Polen'} padecimientos={'Diabetes, hipertension'} />
        </>
    )
}

const ListadoPacientes = () => {
    // Datos de ejemplo
    const doctor = {
        nombre: 'Lucía Pérez',
        especialidad: 'Enfermera/o'
    };

    const pacientes = [
        { id: 1, nombre: 'Paciente 1', edad: '30 años', bpm: '72', curp: 1234567890 },
        { id: 2, nombre: 'Paciente 2', edad: '40 años', bpm: '75', curp: 1234567890 },
        { id: 3, nombre: 'Paciente 3', edad: '50 años', bpm: '78', curp: 1234567890 },
        { id: 5, nombre: 'Leal', edad: '50 años', bpm: '78', curp: 1234567890 },
        { id: 6, nombre: 'Paciente 1', edad: '30 años', bpm: '72', curp: 1234567890 },
        { id: 7, nombre: 'Paciente 2', edad: '40 años', bpm: '75', curp: 1234567890 },
        { id: 8, nombre: 'Paciente 3', edad: '50 años', bpm: '78', curp: 1234567890 },
        { id: 9, nombre: 'Leal', edad: '50 años', bpm: '78', curp: 1234567890 },
        { id: 10, nombre: 'Paciente 1', edad: '30 años', bpm: '72', curp: 1234567890 },
        { id: 11, nombre: 'Paciente 2', edad: '40 años', bpm: '75', curp: 1234567890 },
        { id: 12, nombre: 'pepe 3', edad: '50 años', bpm: '78', curp: 1234567890 },
        { id: 13, nombre: 'pepe', edad: '50 años', bpm: '78', curp: 1234567890 },
    ];



    return (
        <MostrarDoctorYPacientes doctor={doctor} pacientes={pacientes} />
    )
}

const InfoCompleta = ({ nombre, curp, edad, peso, altura, grupS, genero, numSeg, alergias, padecimientos, action }) => {
    const padecimiento = padecimientos.split(',');
    const alergia = alergias.split(',');

    const [isOpen, setIsOpen] = useState(false);
    const handleClickIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (<>
        <div className={`flex absolute w-3/4 bottom-0 right-0 p-5 transition  shadow-inner  dark:bg-slate-800 ${isOpen ? 'h-2/5' : ' h-1/6'}`}>
            <div className='absolute -top-7 md:-top-9 rounded-full border-2 border-verde hover:scale-110 transition duration-300'>
                <img className='w-12 md:w-16' src='/src/assets/images/logo/logo.png'></img>
            </div>
            <div className='flex  md:text-lg'>
                <div className='flex-row'>
                    <div className='flex pt-1 md:pt-4  text-3xl font-semibold'>
                        <p>{nombre}</p>
                    </div>
                    <div className={`flex pt-1 md:pt-2  text-xl space-x-28 ${isOpen ? 'space-x-0' : ''}`}>
                        <p>{curp}</p>
                        <p className={`${isOpen ? 'hidden' : ''}`}> <b>Grupo sanguineo:&nbsp;</b>{grupS}</p>
                    </div>

                    <div className={`flex pt-4  text-xl  ${isOpen ? '' : 'hidden'}`}>
                        <p><b>Genero:&nbsp;</b> {genero}</p>
                    </div>
                    <div className={`flex pt-2  text-xl  ${isOpen ? '' : 'hidden'}`}>
                        <p><b>NNS:&nbsp;</b> {numSeg}</p>
                    </div>
                    <div className={`flex pt-2  text-xl  ${isOpen ? '' : 'hidden'}`}>
                        <div className='pr-3'>
                            <p>{edad} años</p>
                        </div>
                        <div className='pr-3'>
                            <p>{peso}Kg</p>
                        </div>
                        <div className='pr-3'>
                            <p>{altura} cm</p>
                        </div>
                    </div>

                </div>
                <div className={`flex-row md:px-4 lg:px-16  ${isOpen ? '' : 'hidden'}`}>
                    <div className='flex justify-start pt-4'>
                        <p className='font-semibold text-2xl'>Alergias:</p>
                    </div>
                    <div className='grid justify-start pt-4  px-1 text-xl'>
                        {
                            alergia.map((alergia, index) =>
                                <li key={index}>{alergia}</li>)
                        }
                    </div>
                </div>
                <div className={`flex-row ${isOpen ? '' : 'hidden'}`}>
                    <div className='flex justify-start pt-4'>
                        <p className='font-semibold text-2xl'>Padecimientos:</p>
                    </div>
                    <div className='grid justify-start pt-4  px-1 text-xl'>
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


export default ListadoPacientes;
/*{isSmall == false ?
           <div className='flex absolute bottom-0 right-0 w-3/4 h-2/5 shadow-xl dark:bg-slate-800 p-5 transition transform duration-300 visible'>
               <div className='grid justify-start items-center px-2'>
                   <div className='border-2 border-verde dark:bg-slate-800 dark:border-slate-700 rounded-2xl hover:scale-105 duration-300 transform shadow-md p-4 lg:p-2 xl:p-4'>
                       <div className='flex justify-start mb-2 font-semibold'>
                           {nombre}
                       </div>
                       <div className='flex justify-start'>
                           {curp}
                       </div>
                   </div>
                   <Contenedor uno={'NSS: ' + numSeg} />
               </div>

               <div className='grid justify-start items-center px-2'>
                   <Contenedor uno={altura + ' cm'} dos={edad + ' años'} tres={peso + ' kg'} />
                   <Contenedor uno={'Genero ' + genero} dos={'Tipo ' + grupS} />
               </div>
               <div className='grid mx-4 border-2 border-verde dark:bg-slate-800 dark:border-slate-700 rounded-2xl hover:scale-105 duration-300 transform shadow-md p-4 lg:p-2 xl:p-4'>
                   <div className='flex justify-start mb-2'>
                       <p className='font-semibold'>Alergias:</p>
                   </div>
                   <div className='grid justify-start mb-2  p-1'>
                       {
                           alergia.map((alergia, index) =>
                               <li key={index}>{alergia}</li>)
                       }
                   </div>
               </div>
               <div className='grid mx-4 border-2 border-verde dark:bg-slate-800 dark:border-slate-700 rounded-2xl hover:scale-105 duration-300 transform shadow-md p-4 lg:p-2 xl:p-4'>
                   <div className='flex justify-start mb-2'>
                       <p className='font-semibold'>Padecimientos:</p>
                   </div>
                   <div className='grid justify-start mb-2  p-1'>
                       {
                           padecimiento.map((padecimiento, index) =>
                               <li key={index}>{padecimiento}</li>)
                       }
                   </div>
               </div>
               <div className='grid justify-center items-start px-2'>
                   <a href='#' className='flex bg-verde px-2 py-1 rounded-xl hover:bg-red-600 duration-300 transform' onClick={toggleSize}>
                       <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 fill-black dark:fill-white' viewBox='0 0 24 24'>
                           <path d='M19 12a1 1 0 0 1-1 1H8.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.414 11H18a1 1 0 0 1 1 1z' />
                       </svg>
                   </a>
               </div>

           </div> :
           <div className='flex absolute bottom-0 right-0 w-3/4 h-8 shadow-xl dark:bg-slate-800 p-5 transition transform duration-300 visible'>
               <div className='flex justify-end items-end px-2'>
                   <a href='#' className='flex bg-verde px-2 py-1 rounded-xl hover:bg-red-600 duration-300 transform' onClick={toggleSize}>
                       <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 fill-black dark:fill-white'  viewBox="0 0 24 24">
                           <path d="M7.33199 7.68464C6.94146 8.07517 6.3083 8.07517 5.91777 7.68464C5.52725 7.29412 5.52725 6.66095 5.91777 6.27043L10.5834 1.60483C11.3644 0.823781 12.6308 0.82378 13.4118 1.60483L18.0802 6.27327C18.4707 6.66379 18.4707 7.29696 18.0802 7.68748C17.6897 8.078 17.0565 8.078 16.666 7.68748L13 4.02145V21.9999C13 22.5522 12.5523 22.9999 12 22.9999C11.4477 22.9999 11 22.5522 11 21.9999V4.01666L7.33199 7.68464Z" fill="#0F0F0F" />
                       </svg>
                   </a>
               </div>
           </div>
       } */