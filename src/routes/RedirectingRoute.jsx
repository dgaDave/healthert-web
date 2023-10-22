import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

    const { user } = useAuth()

    if (user) return <Navigate to={"/healthert-web/app"}/>

    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectedRoute