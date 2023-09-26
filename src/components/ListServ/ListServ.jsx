import { useState } from "react"
import "./ListServ.css"

const Items = ({svg,title,text}) => {
    return(
        <div className="grid grid-rows-3 grid-flow-col gap-3">
            <div className="place-content-center">
                {svg}
            </div>
            <div>
                <h1 className="text-center lg:p-5 md:p-2">{title}</h1>
            </div>
            <div>
                <p className="text-center  lg:p-5 md:p-2">
                    {text}
                </p>
            </div>
        </div>
    )
}

const ListServ = ()=> {
    let listadoServicios = [
        {
            svg:'no',
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


