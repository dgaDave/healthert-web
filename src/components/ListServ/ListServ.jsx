import { useState } from "react"
import "./ListServ.css"
import Hearth from "./svg/Hearth"
import Geo from "./svg/Geo"
import Plus from "./svg/Plus"
const Items = ({svg,title,text}) => {
    return(
        <div className="contenedor">
            <div className="contenedor--svg">
                {svg}
            </div>
            <div className="contenedor--title">
                <h1>{title}</h1>
            </div>
            <div  className="contenedor--text">
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

const ListServ = ()=> {
    let listadoServicios = [
        {
            svg: <Hearth></Hearth>,
            title:'Medición BPM',
            text:'En Healthert ofrecemos la posibilidad de cuidar a tu paciente desde la comodidad de la palma de tu mano, podrás saber sus signos vitales en cualquier momento, así como poder generar un resumen de los mismos.'
        },
        {
            svg:<Geo></Geo>,
            title:'Ubicación en TR',
            text:'En Healthert nos preocupamos por el bienestar de nuestros usuarios, por ello brindamos la oportunidad de saber en donde se encuentran, en todo momento, en cualquier lugar. Permite que te facilitemos el mejor cuidado remoto posible y nos esforcemos por cumplir y superar tus expectativas.'
        },
        {
            svg:<Plus></Plus>,
            title:'Ver más',
            text:'Te invitamos a ver aún más de nuestros servicios y funciones dentro de nuestra aplicación móvil.'
        }
    ]
    const [arreglo, setArreglo] = useState(listadoServicios)
  return (
    <div className="flex justify-center dark:bg-slate-900 px-6 md:px-12" >
        <div className="grid grid-cols-1 gap-1 place-content-center lg:grid-cols-3 max-w-screen-xl">
            {arreglo.map(item => <Items key={item.title} svg={item.svg} title={item.title} text={item.text}/>)}
        </div>
    </div>
  )
}
export default ListServ


