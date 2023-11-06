import { useEffect, useState } from "react"
import { getBpm } from '../controllers/pacient.controller'


const useBpm = (userRef) => {

    const [bpmValue, setBpmValue] = useState(0)

    useEffect(() => {
        const unsubscribe = getBpm(userRef, setBpmValue)
        return () => {
            unsubscribe()
        }
    }, [])

    return { bpmValue }

}

export default useBpm