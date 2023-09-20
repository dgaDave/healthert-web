import { useState } from "react"
import "./ListServ.css"
import Hearth from "./svg/Hearth"

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
            text:'Si'
        },
        {
            svg:'Si',
            title:'Ubicación en Tiempo Real',
            text:'no'
        },
        {
            svg:'Si',
            title:'Ver más',
            text:'no'
        }
    ]
    const [arreglo, setArreglo] = useState(listadoServicios)
  return (
    <div className="grid grid-cols-1 gap-1 place-content-center md:grid-cols-3">
      {arreglo.map(item => <Items key={item.title} svg={item.svg} title={item.title} text={item.text}></Items>)}
    </div>
  )
}
export default ListServ


