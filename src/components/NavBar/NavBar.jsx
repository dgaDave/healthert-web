import React from 'react'
import "./NavBar.css"
import Button from '../Button/Button'
import LogoPlain from '../LogoPlain/LogoPlain'

const NavBar = ({link, text}) => {
  return (
    <nav className='h-20 relative md:h-24 z-10 md:px-6 py-2 px-4 lg:px-8 xl:px-12 bg-white dark:bg-slate-900 shadow-lg flex items-center justify-between'>
      <a href='#'>
        <div className='flex justify-start items-center space-x-2'>
          <span className='w-10 h-10 md:w-12 md:h-12'><LogoPlain /></span>
          <span className='text-3xl font-semibold md:text-4xl text-verde'>HEALTHERT</span>
        </div>
      </a>
      <Button text={text} link={link} />
    </nav >
  )
}

export default NavBar