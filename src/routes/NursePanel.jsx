import React from 'react'
import Button from '../components/Button/Button'
import ListadoPacientes from '../components/ListadoPacientes/ListadoPacientes'
import GoogleMap from '../components/GoogleMap/GoogleMap'
import PacienteInfoCompleta from '../components/ListadoPacientes/PacienteInfoCompleta'
import { pacientes } from '../components/ListadoPacientes/DummyData'
import usePacients from '../hooks/usePacients'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/authContext'

const NursePanel = () => {
    const { pacients } = usePacients()

    const { logOut, userData } = useAuth()

    const navigate = useNavigate()

    const handleSayData = () => {
        console.log(userData)
    }

    const handleLogOut = async () => {
        await logOut()
        navigate("/healthert-web/")
    }

    return (
        <div className='h-screen w-screen flex bg-gray-300'>
            <div className='absolute top-32 right-20 z-30'>
                <Button text={"salir"} onClick={handleLogOut} />
            </div>
            <div className='absolute top-10 right-20 z-30'>
                <Button text={"Data"} onClick={handleSayData} />
            </div>
            <ListadoPacientes userData = {userData} pacientes={pacientes} />
            <GoogleMap />
            <PacienteInfoCompleta />
        </div>)
}

export default NursePanel