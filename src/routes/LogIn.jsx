import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import FormLogIn from '../components/FormLogIn/FormLogIn'

const SignUp = () => {
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