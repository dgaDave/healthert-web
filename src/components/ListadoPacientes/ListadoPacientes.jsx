// Archivo ListadoPacientes.jsx
const MostrarDoctorYPacientes = ({ doctor, pacientes }) => {
    return (
        <>
            <a href="#"  className="border-2 border-gray-200 dark:border-slate-700 rounded-2xl bg-white p-2.5 mb-2.5 flex items-center transition hover:scale-95 dark:bg-gray-800">
                <img src="user.png" alt="Enfermera" className="rounded-full w-10 h-10 mr-4" />
                <div>
                    <h2 className="font-bold text-xl">{doctor.nombre}</h2>
                    <p>{doctor.especialidad}</p>
                </div>
            </a>
            <hr></hr><br></br>
            <div className="overflow-auto h-screen mr-0">
                {pacientes.map(paciente => (
                    <a key={paciente.id} href="#" className="border-2 border-gray-200 rounded-2xl bg-white p-2.5 mb-2.5 flex items-center mr-4 transition hover:scale-95 dark:border-slate-700 dark:bg-gray-800">
                        <img src="user.png" alt="Paciente" className="rounded-full w-10 h-10 mr-4" />
                        <div>
                            <h3 className="font-bold text-lg">{paciente.nombre}</h3>
                            <p>Edad: {paciente.edad} &nbsp;&nbsp; BPM: {paciente.bpm}</p>
                            <p>CURP: {paciente.curp}</p>
                        </div>
                    </a>
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
        { id: 12, nombre: 'Paciente 3', edad: '50 años', bpm: '78',  curp: 1234567890  },
        { id: 13, nombre: 'Leal', edad: '50 años', bpm: '78',  curp: 1234567890  },
    ];

    return (
        <div className="overflow-hidden sm:w-1/4 md:w-1/4 lg:w-1/4 h-screen bg-verde rounded-r-lg shadow-lg border-gray-100 p-4 dark:bg-gray-800">
            <MostrarDoctorYPacientes doctor={doctor} pacientes={pacientes} />
        </div>
    )
}

export default ListadoPacientes;
