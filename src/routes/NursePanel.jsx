import React, { useState } from 'react'
import Button from '../components/Button/Button'
import ListadoPacientes from '../components/ListadoPacientes/ListadoPacientes'
import GoogleMap from '../components/GoogleMap/GoogleMap'
import PacienteInfoCompleta from '../components/ListadoPacientes/PacienteInfoCompleta'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/authContext'
import ModalNewPatient from '../components/Modals/ModalNewPatient'
import useModal from '../hooks/useModal'
import usePacients from '../hooks/usePacients'
import FloatingAction from '../components/FAB/FloatingAction'
import AddPatient from '../components/FAB/Icons/AddPatient'
import OutNurse from '../components/FAB/Icons/OutNurse'
import Minus from '../components/FAB/Icons/Minus'
import Plus from '../components/FAB/Icons/Plus'

const NursePanel = () => {

    const { logOut, userData } = useAuth()
    const { handleVisibilityChange, visible } = useModal()
    const { pacients } = usePacients()
    const navigate = useNavigate()
    const [selectedPacient, setSelectedPacient] = useState(null)

    const handleFocusedPacient = (pacient) => {
        setSelectedPacient(pacient)
        console.log(selectedPacient)
    }

    const handleLogOut = async () => {
        await logOut()
        navigate("/healthert-web/")
    }

    return (
        <div className='h-screen w-screen flex bg-gray-300'>
            <div className='absolute top-8 right-5 z-30 space-y-3'>
                <FloatingAction svg={<OutNurse />} />
                <FloatingAction svg={<AddPatient />} />
                <FloatingAction svg={<Plus />} />
                <FloatingAction svg={<Minus />} />
            </div>
            {visible && (
                <ModalNewPatient handleVisibilityChange={handleVisibilityChange} />
            )}
            <ListadoPacientes userData={userData} pacients={pacients} handleCardClick={handleFocusedPacient} />
            <GoogleMap />
            <PacienteInfoCompleta pacient={selectedPacient} />
        </div>)
}

export default NursePanel