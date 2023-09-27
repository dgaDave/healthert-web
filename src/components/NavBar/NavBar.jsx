import React, { useState } from 'react'
import "./NavBar.css"

const NavBar = () => {

  const [checked, setChecked] = useState(false)
  const clickMenu = () => setChecked(!checked)

  return (
    <nav className='h-20 relative md:h-24 z-10 py-2 px-2 lg:px-4 xl:px-6 bg-white dark:bg-slate-900 shadow-lg flex items-center justify-between'>
      {/* Falta el logotipo aqui */}
      <a href='#'>
        <span className='text-3xl font-semibold md:text-4xl  text-verde'>HEALTHERT</span>
      </a>
      <input type="checkbox" id="menu" checked={checked} readOnly onClick={clickMenu} className='hidden peer/menu' />
      <label className='cursor-pointer rounded-xl md:hidden border-verde peer-checked/menu:border-2 transition-all duration-100' htmlFor="menu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a8a8a8" className="w-14 h-14 md:h-16 md:w-16 glow">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </label>
      <div className='md:static md:translate-x-0 md:bg-transparent md:shadow-none absolute text-xl h-fit bg-white dark:bg-slate-900 shadow-lg inset-0 top-20 -translate-x-full p-2 rounded-b-xl peer-checked/menu:-translate-x-0 transition-all duration-200'>
        <ul className='md:flex  lg:space-x-4 md:space-x-2 lg:text-2xl items-center'>
          {/* ids de los titulos aqui */}
          <li className='w-full border-b-[1px] dark:border-slate-700 md:border-0 md:inline-block' onClick={clickMenu}><a className='glow w-full inline-block' href="#">Servicios</a></li>
          <li className='w-full border-b-[1px] dark:border-slate-700 md:border-0 md:inline-block' onClick={clickMenu}><a className='glow w-full inline-block' href="#">Descargar</a></li>
          <li className='w-full border-b-[1px] dark:border-slate-700 md:border-0 md:inline-block' onClick={clickMenu}><a className='glow w-full inline-block' href="#">Planes</a></li>
          <li className='w-full border-b-[1px] dark:border-slate-700 md:border-0 md:inline-block' onClick={clickMenu}><a className='glow w-full inline-block' href="#">Funciones</a></li>
          <li className='w-full border-b-[1px] dark:border-slate-700 md:border-0 md:inline-block' onClick={clickMenu}><a className='glow w-full inline-block' href="#">Nosotros</a></li>
          <li className='w-full border-b-[1px] dark:border-slate-700 md:border-0 md:inline-block' onClick={clickMenu}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 lg:w-12 lg:h-12 glow hidden md:inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className='md:hidden glow'>Usuario</span>
            </a>
          </li>
        </ul>
      </div>
    </nav >
  )
}

export default NavBar