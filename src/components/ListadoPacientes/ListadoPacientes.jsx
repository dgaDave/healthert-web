import React, { useState } from 'react';
import CardListado from './CardListado';

const ListadoPacientes = ({ doctor, pacientes }) => {
    const [nombrePaciente, setNombrePaciente] = useState(null);


    return (
            <div className="w-1/4 h-screen flex flex-col overflow-auto border-gray-100 space-y-6 p-4 dark:bg-gray-800">
                <CardListado name={doctor.nombre} speciality={doctor.especialidad} />
                <div className="overflow-auto space-y-6">
                    {
                        pacientes.map(paciente => (
                            <CardListado handleCardClick={setNombrePaciente} key={paciente.id} name={paciente.nombre} age={paciente.edad} curp={paciente.curp} bpm={paciente.bpm} />
                        ))
                    }
                </div>
            </div>
    )
}

{/* <PacienteInfoCompleta nombre={nombrePaciente} curp={'GOCJ020416HMNNRRA7'} edad={'21'} peso={'78'} altura={'180'} grupoSanguineo={'0+'} genero={'Masculino'} numeroSeguro={'4815163078686709'} alergias={'Ibuprofeno,Polen'} padecimientos={'Diabetes, hipertension'} /> */}
// const ListadoPacientes = () => {

//     return (
//         <MostrarDoctorYPacientes doctor={doctor} pacientes={pacientes} />
//     )
// }



export default ListadoPacientes;
