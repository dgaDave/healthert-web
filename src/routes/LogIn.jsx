import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import FormLogIn from '../components/FormLogIn/FormLogIn'

const SignUp = () => {
    return (
        <>
            <NavBar link="/healthert-web/" text="Regresar" />
            <FormLogIn />
            <Footer />
        </>
    )
}

export default SignUp