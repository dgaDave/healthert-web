import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/authContext'
import { getUser } from '../controllers/user.controller'

const useUser = () => {
    const { user } = useAuth()

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        getUser(user.uid).then((userData) => {
            setUserData(userData)
        })
    }, [])

    return { userData }

}

export default useUser