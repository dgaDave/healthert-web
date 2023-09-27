import '../CardFunciones/CardFunciones.css'
export const CardFunciones = ({funcData}) => {
  return (
         <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-4 place-content-center w-full max-w-screen-xl px-6 md:px-12">
            {funcData.map((dato, index) => (
              <div key={index} className="contenedor">
                <img className="rounded-t-2xl" src={dato.img} alt="" />
                <div className="p-4 md:p-5">
                  <h5 className="textoTitulo">{dato.nombre}</h5>
                  <p className="texto">{dato.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
  )
}