import React from 'react'
import mckphone from '../../assets/images/mckPhone1.png'
import mckSmart from '../../assets/images/mckSmart1.png'
import mcks from '../../assets/images/mcks1.png'


const Inicio = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className="flex justify-center my-20 max-w-screen-lg">
          <div className="grid grid-cols-1 gap-12 justify-center items-center lg:grid-cols-2">
            <div className="lg:py-24">
              <div className='text-5xl font-bold text-center text-verde md:text-7xl'>
                <h2>HEALTHERT</h2>
              </div>
              <div className='text-center text-base md:text-xl'>
                <p>Aplicación móvil de monitoreo y alerta remota</p>
              </div>
            </div>
            <div className='flex  justify-center content-center  mx-8 p-0 float-left items-center'>
              <div className='flex justify-center content-center items-center animate-floating'>
                <img alt='Dispositivo' src={mcks} className='h-auto w-96'></img>                
              </div>
              {/*<div className='flex justify-center content-center animate-floating'>
                <img alt='Dispositivo' src={mckphone} className='h-auto w-96'></img>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inicio