import React from 'react'
import Button from '../components/Button/Button'
import ListadoPacientes from '../components/ListadoPacientes/ListadoPacientes'
import GoogleMap from '../components/GoogleMap/GoogleMap'
import PacienteInfoCompleta from '../components/ListadoPacientes/PacienteInfoCompleta'
import { pacientes } from '../components/ListadoPacientes/DummyData'
import usePacients from '../hooks/usePacients'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/authContext'
import ModalNewPatient from '../components/Modals/ModalNewPatient'
import useModal from '../hooks/useModal'
const NursePanel = () => {
    
    const { pacients } = usePacients()
    const { logOut, userData } = useAuth()
    const { handleVisibilityChange, visible } = useModal()
    
    const navigate = useNavigate()

    

    const handleLogOut = async () => {
        await logOut()
        navigate("/healthert-web/")
    }


    return (
        <div className='h-screen w-screen flex bg-gray-300'>
            <div className='absolute top-32 right-20 z-30'>
                <Button text={"salir"} onClick={handleLogOut} />
            </div>
            {visible && (
                <ModalNewPatient handleVisibilityChange={handleVisibilityChange} />
            )}
            <div className='absolute top-10 right-20 z-30'>
                <Button text={"Agregar paciente"} onClick={handleVisibilityChange} />
            </div>
            <ListadoPacientes userData={userData} pacientes={pacientes} />
            <GoogleMap />
            <PacienteInfoCompleta />
        </div>)
}

export default NursePanel