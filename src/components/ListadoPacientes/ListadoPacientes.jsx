// Archivo ListadoPacientes.jsx
const MostrarDoctorYPacientes = ({ doctor, pacientes }) => {
    return (
        <>
            <a href="#"  className="border-2 border-verde dark:border-slate-700 rounded-2xl bg-white p-2.5 my-5 flex items-center transition hover:scale-105 dark:bg-gray-800">
                <img src="user.png" alt="Enfermera" className="rounded-full w-10 h-10 mr-4" />
                <div>
                    <p className="font-bold text-xl">{doctor.nombre}</p>
                    <p>{doctor.especialidad}</p>
                </div>
            </a>
            <hr></hr><br></br>
            <div className="overflow-y-auto h-screen overflow-auto"> 
                {pacientes.map(paciente => (
                    <Link key={paciente.id} to={`/InfoCompleta/InfoCompleta/ ${paciente.id}`}  className="border-2 border-verde rounded-2xl bg-white p-2 mt-5 mx-4 flex items-center mr-2 duration-300 transform hover:scale-105 dark:border-slate-700 dark:bg-gray-800 shadow-lg"> 
                       
                        <img src="user.png" alt="Paciente" className="rounded-full w-10 h-10 mx-4" />
                        <div>
                            <p className="font-bold text-lg">{paciente.nombre}</p>
                            <p>Edad: {paciente.edad} &nbsp;&nbsp; BPM: {paciente.bpm}</p>
                            <p>CURP: {paciente.curp}</p>
                        </div>
                    </Link>
                    
                ))}
            </div>
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
        { id: 2, nombre: 'Paciente 2', edad: '40 años', bpm: '75', curp: 1234567890   },
        { id: 3, nombre: 'Paciente 3', edad: '50 años', bpm: '78', curp: 1234567890  },
        { id: 5, nombre: 'Leal', edad: '50 años', bpm: '78', curp: 1234567890  },
        { id: 6, nombre: 'Paciente 1', edad: '30 años', bpm: '72', curp: 1234567890  },
        { id: 7, nombre: 'Paciente 2', edad: '40 años', bpm: '75', curp: 1234567890  },
        { id: 8, nombre: 'Paciente 3', edad: '50 años', bpm: '78',  curp: 1234567890  },
        { id: 9, nombre: 'Leal', edad: '50 años', bpm: '78',  curp: 1234567890  },
        { id: 10, nombre: 'Paciente 1', edad: '30 años', bpm: '72',  curp: 1234567890  },
        { id: 11, nombre: 'Paciente 2', edad: '40 años', bpm: '75',  curp: 1234567890  },
        { id: 12, nombre: 'pepe 3', edad: '50 años', bpm: '78',  curp: 1234567890  },
        { id: 13, nombre: 'pepe', edad: '50 años', bpm: '78',  curp: 1234567890  },
    ];

    return (
            <MostrarDoctorYPacientes doctor={doctor} pacientes={pacientes} />
        </div>
    )
}

export default ListadoPacientes;
