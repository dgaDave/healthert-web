import { useEffect, useState } from 'react'
import { useAuth } from '../context/authContext'
import { getPacients } from '../controllers/pacient.controller'

const usePacients = () => {

    const { user } = useAuth()

    const [pacients, setPacients] = useState(null)

    useEffect(() => {
        getPacients(user.uid).then((pacientes) => setPacients(pacientes))
    }, [])

    return { pacients }

}

export default usePacients