import '../CardFunciones/CardFunciones.css'
export const CardFunciones = ({funcData}) => {
  return (
         <div className="grid lg:grid-cols-3 md:grid-cols justify-items-center gap-2 gap-y-6 place-content-center">
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
