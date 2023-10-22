import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import FormLogIn from '../components/Form/FormLogIn'
import LogoPlain from '../components/LogoPlain/LogoPlain'


const SignUp = () => {

    return (
        <div className='flex flex-col h-screen justify-between'>
            <NavBar link="/healthert-web/" text="Regresar" />
            <div className='flex items-center p-6  justify-center md:space-x-10'>
                <div className='w-full max-w-lg hidden md:inline-block animate-floating '>
                    <LogoPlain />
                </div>
                <FormLogIn />
            </div>
            <Footer />
        </div>
    )
}

export default SignUp