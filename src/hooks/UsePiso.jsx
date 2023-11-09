import React, { useState } from 'react'

const UsePiso = () => {
    const [piso, setPiso] = useState(1);
    const incrementPiso = () => {
        setPiso(piso + 1)
    }
    const decrementPiso = () => {
        setPiso(piso - 1)
    }
    return[incrementPiso, decrementPiso, piso]
}

export default UsePiso
