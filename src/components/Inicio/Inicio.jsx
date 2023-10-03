import React from 'react'
import mck from '../../assets/images/mcks1.png'
import Button from '../Button/ButtonLink'
import PlayG from "./svg/PlayGoogle"

const Inicio = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex justify-center my-14 max-w-screen-lg'>
        <div className='grid grid-cols-1 justify-center items-center lg:grid-cols-2 lg:gap-36'>
          <div className='grid justify-center'>
            <div className='text-5xl font-bold text-center text-verde md:text-7xl'>
              <h2>HEALTHERT</h2>
            </div>
            <div className='text-center text-base md:text-xl'>
              <p>Aplicación móvil de monitoreo y alerta remota</p>
            </div>
            <div className='flex w-full justify-center my-4 font-semibold'>
              <Button link={""} text={"Descargar"} svg={<PlayG></PlayG>}></Button>
            </div>
          </div>
          <div className='flex items-center content-center'>
            <img alt='Dispositivos' src={mck} className='w-[29rem] md:w-[34rem] xl:w-full animate-floating'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio