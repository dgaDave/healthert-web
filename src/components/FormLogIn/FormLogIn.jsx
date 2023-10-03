import React, { useState } from 'react'
import { useAuth } from '../../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import FormField from '../FormField/FormField'

const FormLogIn = () => {

    const { logOut, logIn } = useAuth()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await logIn(user.email, user.password)
            navigate("/healthert-web/")
        } catch (error) {
            throw new Error(error)
        }
    }

    const [user, setUser] = useState(null)

    const handleUserChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
        console.log(user)
    }

    const handleLogOut = async () => {
        await logOut()
        navigate("/healthert-web/login")
    }

    return (
        <div className='flex items-center p-6 flex-col justify-center'>
            <form onSubmit={handleSubmit} className='flex justify-center max-w-md w-full flex-col p-6 border-2 border-gray-200 dark:border-slate-700 rounded-2xl  dark:bg-gray-800'>
                <h1 className='text-5xl font-semibold'>Bienvenido de nuevo.</h1>
                <h3 className='mb-3 mt-2'>Ingresa tus datos para iniciar sesion.</h3>
                <FormField name="email" onChange={handleUserChange} placeholder={"Correo electronico"} text={"Correo electronico"} type={"email"} />
                <FormField name="password" onChange={handleUserChange} placeholder={"Contrasena"} text={"Contrasena"} type={"password"} />
                <div className='flex justify-between px-2 mt-2'>
                    <span>
                        <input type="checkbox" name="remember" id="remember" className=' accent-verde' />
                        <label htmlFor="remember">Recuerdame</label>
                    </span>
                </div>
                <div className='flex justify-center mt-4 '><Button text={"Iniciar sesion"} /></div>
                <div className='mt-4' ><Link className='hover:text-verde hover:underline transition-all duration-200' to="/healthert-web/signup">No tienes una cuenta?, <span className='text-verde'>Unete</span></Link> </div>
            </form>
            <Button text="Logout" onClick={handleLogOut} />
        </div>
    )
}

export default FormLogIn