import React, { useState } from 'react';
import CardListado from './CardListado';

const ListadoPacientes = ({ doctor, pacientes }) => {
    return (
            <div className="w-1/4 h-screen flex flex-col overflow-auto border-gray-100 space-y-6 p-4 dark:bg-gray-800">
                <CardListado name={doctor.nombre} speciality={doctor.especialidad} />
                <div className="overflow-auto space-y-6">
                    {
                        pacientes.map(paciente => (
                            <CardListado key={paciente.id} name={paciente.nombre} age={paciente.edad} curp={paciente.curp} bpm={paciente.bpm} />
                        ))
                    }
                </div>
            </div>
    )
}
export default ListadoPacientes;
