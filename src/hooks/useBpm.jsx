import { useEffect, useState } from "react"
import { getBpm } from '../controllers/pacient.controller'


const useBpm = (userRef) => {

    const [bpmValue, setBpmValue] = useState(0)

    useEffect(() => {
        const unsubscribeBpm = getBpm(userRef, setBpmValue)
        return () => {
            unsubscribeBpm()
        }
    }, [])

    return { bpmValue }

}

export default useBpm