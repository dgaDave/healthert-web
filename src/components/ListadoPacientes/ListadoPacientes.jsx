import React from 'react';
import CardListado from './CardListado';
import usePacients from '../../hooks/usePacients';

const ListadoPacientes = ({ userData }) => {

    const { pacients } = usePacients()

    return (
        <div className="w-1/4 h-screen flex flex-col overflow-auto border-gray-100 space-y-6 p-4 dark:bg-gray-800">
            <CardListado name={userData.nombrec.nombres} speciality={userData.rol} />
            <div className="overflow-auto space-y-6">
                {pacients ?
                    pacients.map((pacient) => (
                        <CardListado key={pacient.curp} name={pacient.nombres} age={pacient.edad} curp={pacient.curp} bpm={pacient.bpm} />
                    ))
                    :
                    <div>Cargando</div>
                }
            </div>
        </div>
    )
}
export default ListadoPacientes;
