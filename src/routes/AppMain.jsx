import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import ListadoPacientes from '../components/ListadoPacientes/ListadoPacientes'
import { doctor, pacientes } from '../components/ListadoPacientes/DummyData'
import GoogleMap from '../components/GoogleMap/GoogleMap'
import PacienteInfoCompleta from '../components/ListadoPacientes/PacienteInfoCompleta'
import usePacients from '../hooks/usePacients'
import Button from '../components/Button/Button'


const AppMain = () => {

    const { pacients } = usePacients()

    console.log(pacients)

    const navigate = useNavigate()

    const { logOut, user } = useAuth()

    const handleLogOut = async () => {
        await logOut()
        navigate("/healthert-web/")
    }

    return (
        <div className='h-screen w-screen flex bg-gray-300'>
            <div className='absolute top-0 right-0 z-30'>
                <Button text={"salir"} onClick={handleLogOut} />
            </div>
            <ListadoPacientes doctor={doctor} pacientes={pacientes} />
            <GoogleMap />
            <PacienteInfoCompleta />
        </div>
    )
}

export default AppMain