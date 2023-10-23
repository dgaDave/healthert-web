import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/authContext'

const useUser = () => {
    const { user } = useAuth()

    const [userData, setUserData] = useState(null)

    useEffect(() => {

    }, [])

    return { userData }

}

export default useUser