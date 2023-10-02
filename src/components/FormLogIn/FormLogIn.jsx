import React, { useState } from 'react'
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

const FormLogIn = () => {

    const { logOut, logIn } = useAuth()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        try {
            await logIn(user.email, user.password)
            navigate("/healthert-web/")
        } catch (error) {
            throw new Error("Fallo al registrarse")
        }
    }

    const [user, setUser] = useState(null)

    const handleUserChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
        console.log(user)
    }

    return (
        <div className='flex items-center px-6  justify-center h-'>
            <form onSubmit={handleSubmit} className='flex max-w-screen-lg w-full flex-col p-4 border-2 border-gray-200 dark:border-slate-700 rounded-2xl  dark:bg-gray-800'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' autoComplete='on' onChange={handleUserChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id="password" autoComplete='on' onChange={handleUserChange} />
                <button type="submit">Iniciar sesion</button>
            </form>
        </div>
    )
}

export default FormLogIn