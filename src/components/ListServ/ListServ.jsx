import { useState } from "react"
import Hearth from "./svg/Hearth"
import Geo from "./svg/Geo"
import Plus from "./svg/Plus"
const Items = ({ svg, title, text }) => {
    return (
        <div className="flex flex-col my-2 p-5 border-2 border-gray-200 dark:border-slate-700 rounded-2xl  dark:bg-gray-800  transform  duration-300 hover:scale-105 lg:m-4 shadow-md">
            <div className="flex justify-center m-5">
                {svg}
            </div>
            <div className="flex justify-center place-content-center text-center m-5 font-bold text-3xl text-verde">
                <h1>{title}</h1>
            </div>
            <div className="grid leading-5  justify-center text-center font-normal  m-6">
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

const ListServ = () => {
    let listadoServicios = [
        {
            svg: <Hearth></Hearth>,
            title: 'Medición BPM',
            text: 'En Healthert ofrecemos la posibilidad de cuidar a tu paciente desde la comodidad de la palma de tu mano, podrás saber sus signos vitales en cualquier momento, así como poder generar un resumen de los mismos.'
        },
        {
            svg: <Geo></Geo>,
            title: 'Ubicación en TR',
            text: 'En Healthert nos preocupamos por el bienestar de nuestros usuarios, por ello brindamos la oportunidad de saber en donde se encuentran, en todo momento, en cualquier lugar. Permite que te facilitemos el mejor cuidado remoto posible y nos esforcemos por cumplir y superar tus expectativas.'
        },
        {
            svg: <Plus></Plus>,
            title: 'Ver más',
            text: 'Te invitamos a ver aún más de nuestros servicios y funciones dentro de nuestra aplicación móvil.'
        }
    ]
    const [arreglo, setArreglo] = useState(listadoServicios)
    return (
        <div className="flex justify-center dark:bg-slate-900 px-6 md:px-12" >
            <div className="grid grid-cols-1 gap-1 place-content-center lg:grid-cols-3 max-w-screen-xl">
                {arreglo.map(item => <Items key={item.title} svg={item.svg} title={item.title} text={item.text} />)}
            </div>
        </div>
    )
}
export default ListServ


