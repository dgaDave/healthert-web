import logo from "../../assets/images/logo/logo.png"
import personal_plan_img from "../../assets/images/Images_accord/mirando_app.png"
import regPac from "../../assets/images/images_funciones/regPac2.png"
import pulso from "../../assets/images/images_funciones/pulso.png"
import recibeAlerta from "../../assets/images/images_funciones/recibeAlerta.png"
import agendar from "../../assets/images/images_funciones/agendar.png"
import ficha from "../../assets/images/images_funciones/fichame.png"
import reporte from "../../assets/images/images_funciones/reporte.png"
import grafica from "../../assets/images/images_funciones/grafica.png"
import qr from "../../assets/images/images_funciones/qr.png"
import gpacientes from "../../assets/images/images_funciones/gestpaci.png"
import muser from "../../assets/images/images_funciones/multiuser.png"
import enfe from "../../assets/images/images_funciones/enfermera.png"
import aleremot from "../../assets/images/images_funciones/aleremota.png"
import plan from "../../assets/images/images_funciones/plan.png"
import { CardFunciones } from "../CardFunciones/CardFunciones"

const funcData = [
    {
        nombre: "Registro de pacientes",
        descripcion: "Registra en el sistema a las personas que deseés cuidar, ingresa su ficha médica y tus datos personales.",
        img: regPac,
    },
    {
        nombre: "Recibe una alerta",
        descripcion: "El sistema puede captar alertas manuales o automáticas, al recibirlas y acceder a ellas, podrás ver la ubicación de la persona en riesgo dentro de google maps.",
        img: recibeAlerta,
    },

    {
        nombre: "Alerta remota",
        descripcion: "Según el usuario, puede enviar o recibir alertas en tiempo real. El paciente puede generar una alerta manualmente o el sistema generará una según sus signos vitales.",
        img: aleremot,
    },

    {
        nombre: "Monitoreo de pulsos por minuto",
        descripcion: "¡Nuestro sistema en conjunto de un SmartWatch es capaz de mostrarte los pulsos por minuto en tiempo real!.",
        img: pulso,
    },
    {
        nombre: "Geolocalización",
        descripcion: "El sistema es capaz de mostrarte la ubicación en tiempo real de tu paciente, en cualquier lugar, en cualquier momento.",
        img: personal_plan_img,
    },

    {
        nombre: "Agenda de medicamentos",
        descripcion: "Puedes programar la toma de medicamentos de tu paciente, es decir, definir el medicamento, cantidad, intervalo de tiempo, inicio y hora de toma.",
        img: agendar,
    },
    {
        nombre: "Ficha médica",
        descripcion: "Ingresa una ficha médica de tu paciente, esta contendrá datos como: Nombre, tipo sanguineo, NSS, CURP, alergias, padecimientos, entre otros datos relevantes.",
        img: ficha,
    },
    {
        nombre: "Reportes",
        descripcion: "El sistema es capaz de generar reportes que recopilan los medicamentos agendados, las alertas y su tipo, adempas del pulso cardiaco, esto durante todo el mes.",
        img: reporte,

    },
    {
        nombre: "Gráficas",
        descripcion: "Además de poder observar el ritmo cardiaco, puedes visualizar una gráfica a base del promedio del pulso cardiaco. ",
        img: grafica,
    },
    {
        nombre: "Acceso a la ficha médica",
        descripcion: "Puedes scannear un código QR que el sistema generará para ti, por medio del mismo podrás descargar la ficha médica de tu paciente.",
        img: qr,
    },
    {
        nombre: "Gestiona pacientes",
        descripcion: "En caso de ser necesario, podrás editar los datos del paciente, nombre, ficha médica, fotografía. Vincula y desvincula pacientes.",
        img: gpacientes,
    },
    {
        nombre: "Varios a la vez",
        descripcion: "¡Visualiza la ubicación y el pulso en una sola pantalla!, esta función dependerá del tipo de plan que esté relacionado a tu cuenta.",
        img: muser,
    },
    {
        nombre: "Secciona a tus pacientes",
        descripcion: "¿Monitorear dentro de un edificio?, puedes hacerlo, el sistema te mostrará en que piso se encuentra tu paciente.",
        img: personal_plan_img,
    },
    {
        nombre: "Datos especializados",
        descripcion: "Carga y visualiza información de tu paciente además de la ficha médica. Estudios, recetas, tratamientos.",
        img: enfe,
    },
    {
        nombre: "¿Qué funciones tengo?",
        descripcion: "Según tu plan, las funciones cambiarán. Visita el apartado de planes.",
        img: plan,
    },



]


const Funciones = () => {
    return (
        <>
            <div className="flex justify-center dark:bg-slate-900 ">
                <div className=" text-moradoOscuro dark:text-gray-100">
                    <div className="text-5xl text-center py-5">
                        <div className="mx-auto max-w-screen-xl p-5">
                            <img src={logo} alt="Logo corazón" className="w-20 h-20 mx-auto" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">FUNCIONES</h1>
                    </div>
                    <p className="text-gray-400 dark:text-verde text-xl md:text-2xl sm:text-2xl text-center font-bold py-5">
                        Aprovecha al máximo las funciones de Healthert </p>
                    <div className="my-9">
                        <CardFunciones funcData={funcData} />
                    </div>
                    {/* <div className="px-5">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl  text-center font-bold">
                            ¿Qué funciones tengo?</h1>
                        <p className="text-gray-400 dark:text-verde text-xl md:text-2xl sm:text-2xl text-center font-bold py-5">
                            Según tu plan, las funciones cambiarán, sin embargo, en Healthert pensamos en ayudar, sin importar el plan, podrás cuidar a los tuyos. </p>
                    </div> */}
                </div>
            </div>
        </>
    )
}



export default Funciones