import React, { useEffect, useState } from 'react'
import { getPic } from '../controllers/files.controller'

const usePic = (userRef) => {
    const [picUrl, setPicUrl] = useState("")
    useEffect(() => {
        getPic(userRef).then(url => setPicUrl(url))
    }, [])

    return { picUrl }
}


export default usePic