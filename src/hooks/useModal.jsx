import React, { useState } from 'react'

const useModal = () => {
    const [visible, setVisible] = useState(false)

    const handleVisibilityChange = () => setVisible(!visible)

    return { handleVisibilityChange, visible }
}

export default useModal