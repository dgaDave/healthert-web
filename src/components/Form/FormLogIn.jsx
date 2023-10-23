import React, { useState } from 'react'
import { useAuth } from '../../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import FormField from '../FormField/FormField'
import useForm from '../../hooks/useForm'
import FormBase from './FormBase'

const FormLogIn = () => {

    const { logIn } = useAuth()

    const navigate = useNavigate()

    const { formData, handleFormDataChange } = useForm()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await logIn(formData.email, formData.password)
            } catch (error) {
            throw new Error(error)
        }
    }

    return (
        <FormBase onSubmit={handleSubmit}>
            <h1 className='text-5xl font-semibold'>Bienvenido de nuevo.</h1>
            <h3 className='mb-3 mt-2'>Ingresa tus datos para iniciar sesion.</h3>
            <FormField name="email" onChange={handleFormDataChange} placeholder={"Correo electronico"} text={"Correo electronico"} type={"email"} />
            <FormField name="password" onChange={handleFormDataChange} placeholder={"Contrasena"} text={"Contrasena"} type={"password"} />
            <div className='flex justify-center mt-6 '><Button text={"Iniciar sesion"} /></div>
            <div className='mt-4' ><Link className='hover:text-verde hover:underline transition-all duration-200' to="/healthert-web/signup">No tienes una cuenta?, <span className='text-verde'>Unete</span></Link> </div>
        </FormBase>
    )
}

export default FormLogIn