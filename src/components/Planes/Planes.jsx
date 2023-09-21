import { Accordeon } from "../Accordeon/Accordeon"
import { CardPlanes } from "../CardPlanes/CardPlanes"
import { TablaComparativa } from "../TablaComparativa/TablaComparativa"
import logo from "../../assets/images/logo/logo.png"
import personal_plan_img from "../../assets/images/Images_accord/mirando_app.png"
import insti_plan_img from "../../assets/images/Images_accord/medicos_image.png"
export const Planes = () => {
        const items = [
          {
            titulo: 'Plan Personal',
            contenido: '¡Obten la capacidad de monitorear, cuidar y recibir alertas de una persona en tiempo real! . Con este plan podrás acceder a funciones como: Monitoreo de ritmo cardiaco y ubicación geográfica, gráficas sobre el comportamiento del paciente y más! .',
            img: personal_plan_img
          },
          {
            titulo: 'Plan Institucional',
            contenido: "Servicio dirigido a instituciones de salud para aprovecharlo al máximo. Enfocado en las y los enfermeros, brindamos la capacidad de monitorear varios pacientes a la vez, vista por pisos y más datos específicos para apoyar en el cuidado especializado.",
            img: insti_plan_img
          }
        ]

        const planes = [
          {
            titulo: "Plan Personal",
            precio: 100,
            periodicidad: "/mes",
            caracteristicas: [
              "Cuida a tus seres queridos",
              "Agrega más de un paciente",
              "Monitorea de uno en uno",
            ],
          },
          {
            titulo: "Plan Institucional",
            precio: 1000,
            periodo: "/anual",
            caracteristicas: [
              "Cuidado más cercano",
              "Enfocado en mejorar labores de cuidado",
              "Ideal para hospitales",
              "Ideal para empresas de enfermería privada",
              "Soporte para monitoreo en simultáneo",
            ],
          },
        ]
  return (
   <>
    <div className="dark:bg-gray-900">
        <div className="text-moradoOscuro dark:text-white font-roboto font-bold text-5xl text-center py-5">
          <div className="mx-auto max-w-md p-5">
            <img src={logo} alt="Logo corazón" className="w-20 h-20 mx-auto" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl">NUESTROS PLANES</h1>
        </div>
        <p className="text-gray-400 dark:text-verde text-xl md:text-3xl sm:text-2xl text-center font-roboto font-bold py-5">
            Manejamos distintos planes para cada tipo de usuario</p>
        <div className="p-5 sm:p-12">
          <TablaComparativa/>
        </div>
        <h2 className="text-moradoOscuro dark:text-white text-xl md:text-4xl sm:text-2xl font-roboto font-bold text-center py-5">
            DESCRIPCIÓN DE LOS PLANES </h2> 
        <div className="p-5">
          <Accordeon items={items}/>
        </div>  
        <div className="p-5">
          <h2 className="font-roboto font-bold text-xl md:text-4xl sm:text-2xl text-center py-5 text-moradoOscuro dark:text-white">
              PRECIOS </h2>
          <CardPlanes planes={planes}/>
        </div>
      </div>   
    </> 
  )
}
