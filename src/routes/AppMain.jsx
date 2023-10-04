import React from 'react'
import Button from '../components/Button/Button'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

const AppMain = () => {

    const navigate = useNavigate()

    const { logOut } = useAuth()

    const handleLogOut = async () => {
        await logOut()
        navigate("/healthert-web/")
    }

    return (
        <div><Button text="Salir de la sesion" onClick={handleLogOut} /></div>
    )
}

export default AppMain