import React from 'react'
import NursePanel from './NursePanel'
import AdminPanel from './AdminPanel'
import { useAuth } from '../context/authContext'


const AppMain = () => {

    const {userData} = useAuth()
    if (userData) {
        if (userData.rol == 'admin') {
            return (
                <AdminPanel />
            )
        }
        else {
            return (
                <NursePanel />
            )
        }
    } else {
        return <div>Loading</div>
    }


}

export default AppMain