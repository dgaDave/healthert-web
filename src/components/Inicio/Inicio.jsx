import React from 'react'
import mck from '../../assets/images/mck.png'
import Button from '../Button/Button'
import PlayG from "./svg/PlayGoogle"

const Inicio = () => {
  return (
    <>
    <div className='flex justify-center'>
      <div className='flex justify-center my-20 max-w-screen-lg'>
        <div className='grid grid-cols-1 justify-center items-center lg:grid-cols-2 lg:gap-36'>
          <div className='grid justify-center'>
            <div className='text-5xl font-bold text-center text-verde md:text-7xl'>
              <h2>HEALTHERT</h2>
            </div>
            <div className='text-center text-base md:text-xl'>
              <p>Aplicación móvil de monitoreo y alerta remota</p>
            </div>
            <div className='flex w-full justify-center m-4 font-bold'>
              <Button link={""} text={"Descargar"} svg={<PlayG></PlayG>}></Button>
            </div>
          </div>
          <div className='items-center content-center'>
              <img alt='Dispositivos' src={mck} className='h-80'></img>  
          </div>
        </div>
      </div>
    </div>

    
    </>
  )
}

export default Inicio