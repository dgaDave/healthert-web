import React from 'react'
import './Inicio.css'


const Inicio = () => {
    return (
        <>

        <div className='contenedor'>
        
  <div className="relative mx-auto max-w-screen-xl px-6 py-8 sm:py-12 sm:px-8 lg:py-16 lg:px-8 dark:bg-slate-900">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold text-center text-verde sm:text-7xl">HEALTHERT</h2>

        <p class="mt-4 text-center text-gray-700 sm:text-2xl dark:text-white">
          Aplicación móvil de monitoreo y alerta remota
        </p>
      </div>

      <div
        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt=""
          src="mck.png"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

    </div>
  </div>
</div>

        
        </>
      )
}

export default Inicio