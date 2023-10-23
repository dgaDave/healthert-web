import React, { useState } from 'react'
import FormBase from './FormBase'
import { motion } from 'framer-motion'
import { useAuth } from '../../context/authContext'
import useForm from '../../hooks/useForm'
import FormField from '../FormField/FormField'
import Button from '../Button/Button'

const FormCreateNurse = () => {

    const { signUp } = useAuth()

    const [step, setStep] = useState(1)

    const { formData, handleFormDataChange } = useForm()

    const handleStepChange = (e) => {
        e.preventDefault()
        setStep(step + 1)
    }

    const { user } = useAuth()

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
                rfc: formData.rfc,
                rol: formData.cargo,
                admin:user.uid
            })
        } catch (error) {
            throw new Error(error)
        }
    }


    return (<FormBase onSubmit={step != 3 ? handleStepChange : handleSubmit} >
        <motion.h1 layout className='text-5xl font-semibold'>Ingresar nuevo integrante.</motion.h1>
        <motion.h3 layout className='mb-3 mt-2'>Ingresa sus datos para registrarlo.</motion.h3>
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
                    </>
                    :
                    <>
                        {/* Tercer form */}
                        <FormField key={"cargo"} name="cargo" onChange={handleFormDataChange} placeholder={"Cargo"} text={"Cargo"} type={"text"} />
                        <FormField key={"rfc"} name="rfc" onChange={handleFormDataChange} placeholder={"RFC"} text={"RFC"} type={"text"} />
                        <FormField key={"telefono"} name="telefono" onChange={handleFormDataChange} placeholder={"Telefono"} text={"Telefono"} type={"tel"} />
                    </>
        }
        <div className='flex justify-center mt-6 '>
            <Button key={`${step == 1 ? `btn1` : step == 2 ? `btn2` : `btn3`}`} text={step != 3 ? "Continuar" : "Registrar"} />
        </div>
    </FormBase>
    )
}

export default FormCreateNurse