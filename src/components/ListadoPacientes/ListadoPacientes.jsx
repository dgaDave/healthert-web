import React from 'react';
import CardListado from './CardListado';
import CardEncargado from './CardEncargado';

const ListadoPacientes = ({ userData, pacients, handleCardClick }) => {
    return (
        <div className="w-1/4 h-screen flex flex-col overflow-auto border-gray-100 space-y-6 p-4 dark:bg-gray-800">
            <CardEncargado name={userData.nombrec.nombres} speciality={userData.rol} />
            <div className="overflow-auto space-y-6">
                {pacients ? 
                    pacients.map((pacient) => (
                        <CardListado handleCardClick={handleCardClick} key={pacient.curp} pacient={pacient} />
                    ))
                    :
                    <div>Cargando...</div>
                }
            </div>
        </div>
    )
}
export default ListadoPacientes;
