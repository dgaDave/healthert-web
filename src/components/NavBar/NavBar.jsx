import React from 'react'
import "./NavBar.css"
import Button from '../Button/Button'

const NavBar = () => {
  return (
    <nav className='h-20 relative md:h-24 z-10 py-2 px-2 lg:px-4 xl:px-6 bg-white dark:bg-slate-900 shadow-lg flex items-center justify-between'>
      {/* Falta el logotipo aqui */}
      <a href='#'>
        <span className='text-3xl font-semibold md:text-4xl text-verde'>HEALTHERT</span>
      </a>
      <Button text={"Iniciar sesion"} link={"#"}/>
    </nav >
  )
}

export default NavBar