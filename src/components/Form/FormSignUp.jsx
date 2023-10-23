import React, { useState } from 'react'
import { useAuth } from '../../context/authContext'
import { useNavigate, Link } from 'react-router-dom'
import FormField from '../FormField/FormField'
import Button from '../Button/Button'
import useForm from '../../hooks/useForm'
import { motion, AnimatePresence } from 'framer-motion'
import FormBase from './FormBase'

const FormSignUp = () => {

    const { signUp } = useAuth()

    const [step, setStep] = useState(1)

    const { formData, handleFormDataChange } = useForm()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(formData.email, formData.password, {
                nombrec: {
                    "nombres": formData.nombres,
                    "apellidoP": formData.apellidoP,
                    "apellidoM": formData.apellidoM
                },
                telefono: formData.telefono,
                nombreHospital: formData.nombreHospital,
                rfc: formData.rfc,
                licencia: formData.licencia,
                rol: "admin"
            })
        } catch (error) {
            throw new Error(error)
        }
    }

    const handleStepChange = (e) => {
        e.preventDefault()
        setStep(step + 1)
    }

    return (
        <FormBase onSubmit={step != 3 ? handleStepChange : handleSubmit} >
            <motion.h1 layout className='text-5xl font-semibold'>Unete a nuestro servicio.</motion.h1>
            <motion.h3 layout className='mb-3 mt-2'>Ingresa tus datos para registrarte.</motion.h3>
            {
                // Nombre del hospital, nombre de la persona, numero, rfc, licencia
                step == 1 ?
                    <>
                        {/* Primer form */}
                        <FormField key={"email"} name="email" onChange={handleFormDataChange} placeholder={"Correo electronico"} text={"Correo electronico"} type={"email"} />
                        <FormField key={"password"} name="password" onChange={handleFormDataChange} placeholder={"Contrasena"} text={"Contrasena"} type={"password"} />
                    </>
                    :
                    step == 2 ?
                        <>
                            {/* Segundo form */}
                            <FormField key={"nombres"} name="nombres" onChange={handleFormDataChange} placeholder={"Nombre(s)"} text={"Nombre(s)"} type={"text"} />
                            <FormField key={"apellidoP"} name="apellidoP" onChange={handleFormDataChange} placeholder={"Apellido Paterno"} text={"Apellido Paterno"} type={"text"} />
                            <FormField key={"apellidoM"} name="apellidoM" onChange={handleFormDataChange} placeholder={"Apellido Materno"} text={"Apellido Materno"} type={"text"} />
                            <FormField key={"telefono"} name="telefono" onChange={handleFormDataChange} placeholder={"Telefono"} text={"Telefono"} type={"tel"} />
                        </>
                        :
                        <>
                            {/* Tercer form */}
                            <FormField key={"nombreHospital"} name="nombreHospital" onChange={handleFormDataChange} placeholder={"Nombre del hospital"} text={"Nombre del hospital"} type={"text"} />
                            <FormField key={"rfc"} name="rfc" onChange={handleFormDataChange} placeholder={"RFC"} text={"RFC"} type={"text"} />
                            <FormField key={"licencia"} name="licencia" onChange={handleFormDataChange} placeholder={"Licencia"} text={"Licencia"} type={"text"} />
                        </>
            }
            <div className='flex justify-center mt-6 '>
                <Button text={step != 3 ? "Continuar" : "Registrarse"} />
            </div>
            <div className='mt-4' ><Link className='hover:text-verde hover:underline transition-all duration-200' to="/healthert-web/login">Tienes una cuenta?, <span className='text-verde'>Inicia sesion</span></Link> </div>
        </FormBase>
    )
}

export default FormSignUp