import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

    const { user, loading } = useAuth()

    if(loading) return <></>

    if (!user) return <Navigate to={"/healthert-web/"}/>

    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectedRoute