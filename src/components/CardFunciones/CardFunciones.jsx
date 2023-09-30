export const CardFunciones = ({ funcData }) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-4 place-content-center w-full max-w-screen-xl px-6 md:px-12">
      {funcData.map((dato, index) => (
        <div key={index} className="max-w-md bg-white 
              border border-gray-200 rounded-2xl dark:border-slate-700
              shadow-md 
              dark:bg-gray-800
              transform  duration-700
              hover:scale-105 lg:m-4">
          <img className="rounded-t-2xl" src={dato.img} alt="" />
          <div className="p-4 md:p-5">
            <h5 className="mb-2 text-xl 
            md:text-2xl 
            lg:text-3xl 
            font-bold 
            tracking-tight
          text-verde
          dark:text-gray-100
          dark:hover:text-moradoOscuro
          hover:text-moradoOscuro duration-300">{dato.nombre}</h5>
            <p className="mb-2 
            lg:text-lg">{dato.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
