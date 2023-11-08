import { useEffect, useState } from "react"
import { getLocation } from '../controllers/pacient.controller'


const useLocation = (userRef) => {

    const [locationValue, setLocationValue] = useState(null)

    useEffect(() => {
        const unsubscribe = getLocation(userRef, setLocationValue)
        return () => unsubscribe()

    }, [])

    return { locationValue }

}

export default useLocation