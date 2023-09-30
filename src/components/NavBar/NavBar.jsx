import React from 'react'
import "./NavBar.css"
import Button from '../Button/Button'

const NavBar = () => {
  return (
    <nav className='h-20 relative md:h-24 z-10 md:px-6 py-2 px-4 lg:px-8 xl:px-12 bg-white dark:bg-slate-900 shadow-lg flex items-center justify-between'>
      {/* Falta el logotipo aqui */}
      <a href='#'>
        <span className='text-3xl font-semibold md:text-4xl text-verde'>HEALTHERT</span>
      </a>
      <Button text={"Iniciar sesion"} link={"/user"}/>
    </nav >
  )
}

export default NavBar