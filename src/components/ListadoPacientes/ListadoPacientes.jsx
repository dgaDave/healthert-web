import React, { useState } from 'react';

const MostrarDoctorYPacientes = ({ doctor, pacientes }) => {
    const [infoDiv, setInfoDiv] = useState(1);
    const [nombrePaciente, setNombrePaciente] = useState(null);

    const handleClick = (nombre) => {
        setInfoDiv(infoDiv + 1);
        setNombrePaciente(nombre);
    }

    return (
        <>

        {infoDiv == 1 ?
        <div className="lg:w-1/4  h-screen flex flex-col rounded-r-lg overflow-hidden shadow-lg border-gray-100 p-2 dark:bg-gray-400">
            <a href="#" className="border-2 border-verde dark:border-slate-700 rounded-2xl bg-white p-2.5 my-5 flex items-center transition hover:scale-105 dark:bg-gray-800">
                <img src="user.png" alt="Enfermera" className="rounded-full w-10 h-10 mr-4" />
                <div>
                    <p className="font-bold text-xl">{doctor.nombre}</p>
                    <p>{doctor.especialidad}</p>
                </div>
            </a>
            {/* <hr></hr><br></br> */}
            <div className="scroll-m-0 overflow-y-scroll">
                {pacientes.map(paciente => (
                    <button onClick ={() => handleClick(paciente.nombre)} className="border-2 cursor-pointer border-verde rounded-2xl bg-white p-2 mt-5 mx-4 flex items-center mr-2 duration-300 transform hover:scale-105 dark:border-slate-700 dark:bg-gray-800 shadow-lg">

                        <img src="user.png" alt="Paciente" className="rounded-full w-10 h-10 mx-4" />
                        <div>
                            <p className="font-bold text-lg">{paciente.nombre}</p>
                            <p>Edad: {paciente.edad} &nbsp;&nbsp; BPM: {paciente.bpm}</p>
                            <p>CURP: {paciente.curp}</p>
                        </div>
                    </button>

                ))}
            </div>
        </div>

        :
        <InfoCompleta nombre={nombrePaciente} curp = {'GOCJ020416HMNNRRA7'} edad = {'21'} peso = {'78'}
        altura = {'180'} grupS = {'0+'} genero = {'Masculino'} numSeg = {'4815163078686709'} alergias = {'Ibuprofeno,Polen'} padecimientos = {'Diabetes, hipertension'}/>


                }
                
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

const Contenedor = ({ uno, dos, tres }) => {
    return (
        <div className='flex justify-between mt-5 border-2 border-verde dark:bg-slate-800 dark:border-slate-700 rounded-2xl hover:scale-105 duration-300 transform shadow-md p-4 lg:p-2 xl:p-4'>
            <div className='flex m-2'>
                {uno}
            </div>
            <div className='flex m-2'>
                {tres}
            </div>
            <div className='flex m-2'>
                {dos}
            </div>
        </div>
    )
}
const InfoCompleta = ({ nombre, curp , edad, peso,altura, grupS, genero, numSeg , alergias, padecimientos}) => {
    const padecimiento = padecimientos.split(',');
    const alergia = alergias.split(',');
    const [isSmall, setIsSmall] = useState(false);

    const toggleSize = () => {
        setIsSmall(!isSmall);
    };

    const [listDiv, setListDiv] = useState(1);

    return (

        <>
        {listDiv == 1 ?
        <div className={`lg:w-1/4 h-screen shadow-xl dark:bg-slate-900 p-5 overflow-y-auto transition transform duration-300 ${isSmall ? 'collapse' : 'vivisble'}`}>
            <div className='flex mb-5 text-center justify-between items-center'>
                <div className='flex justify-start mb-5'>
                    <img src='' alt='LogoHealthert '></img>
                </div>
                <div>
                    <button onClick ={() => setListDiv(listDiv + 1)} className='flex bg-verde px-2 py-1 rounded-xl hover:bg-red-600 duration-300 transform' >
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 fill-black dark:fill-white' viewBox='0 0 24 24'>
                            <path d='M19 12a1 1 0 0 1-1 1H8.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.414 11H18a1 1 0 0 1 1 1z' />
                        </svg>
                    </button>
                </div>

            </div>
            <div className='grid justify-start mx-2'>
                <div className='flex flex-col justify-start'>
                    <div className='flex justify-start mb-5 '>
                        <img src='' alt='ImagenPaciente'></img>
                    </div>
                    <div className='border-2 border-verde dark:bg-slate-800 dark:border-slate-700 rounded-2xl hover:scale-105 duration-300 transform shadow-md p-4 lg:p-2 xl:p-4'>{/* Borde verde en modo claro */}
                        <div className='flex justify-start mb-2 font-semibold'>
                            {nombre}
                        </div>
                        <div className='flex justify-start'>
                            {curp}
                        </div>
                    </div>
                    <Contenedor uno={'NSS: ' + numSeg} />
                    <Contenedor uno={altura + ' cm'} dos={edad + ' años'} tres={peso + ' kg'} />
                    <Contenedor uno={'Genero ' + genero} dos={'Tipo ' + grupS} />
                    <div className='grid mt-4 border-2 border-verde dark:bg-slate-800 dark:border-slate-700 rounded-2xl hover:scale-105 duration-300 transform shadow-md p-4 lg:p-2 xl:p-4'>
                        <div className='flex justify-start mb-2'>
                            <p className='font-semibold'>Alergias:</p>
                        </div>
                        <div className='grid justify-start mb-2 m-2 p-1'>
                            {
                                alergia.map((alergia, index) =>
                                    <li key={index}>{alergia}</li>)
                            }
                        </div>
                    </div>                
                    <div className='grid mt-4 border-2 border-verde dark:bg-slate-800 dark:border-slate-700 rounded-2xl hover:scale-105 duration-300 transform shadow-md p-4 lg:p-2 xl:p-4'>
                        <div className='flex justify-start mb-2'>
                            <p className='font-semibold'>Padecimientos:</p>
                        </div>
                        <div className='grid justify-start mb-2 m-2 p-1'>
                            {
                                padecimiento.map((padecimiento, index) =>
                                    <li key={index}>{padecimiento}</li>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

        :
        <MostrarDoctorYPacientes doctor={doctor} pacientes={pacientes} />


                }</>
    )
}


export default ListadoPacientes;
