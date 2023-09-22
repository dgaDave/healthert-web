import personal_plan_img from "../../assets/images/Images_accord/mirando_app.png"
import '../CardFunciones/CardFunciones.css'
export const CardFunciones = ({funcData}) => {
  return (
 <div className=" grid grid-cols-1 gap-1 space-y-5  place-content-center  lg:grid-cols-3">
    {funcData.map((dato, index) => (
      <div key={index} className="contenedor">
        <img className="rounded-t" src={dato.img} alt="" />
        <div className="p-4 md:p-5">
          <h5 className="textoTitulo">{dato.nombre}</h5>
          <p className="texto">{dato.descripcion}</p>
        </div>
      </div>
    ))}
  </div>
  )
}
