import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import FormLogIn from '../components/FormLogIn/FormLogIn'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const SignUp = () => {

    const {user} =useAuth()

    if (user) {
        return <Navigate to="/healthert-web/app"/>
    }

    return (
        <>
            <div className='flex flex-col h-screen justify-between'>
                <NavBar link="/healthert-web/" text="Regresar" />
                <FormLogIn />
                <Footer />
            </div>
        </>
    )
}

export default SignUp