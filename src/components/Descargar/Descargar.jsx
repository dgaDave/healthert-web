import Button from '../Button/Button';
import Logo from './img/Logo1.svg';
import SmarMorado from './img/sw.png';
import LogIn from './img/inicio.png';
import DatosUs from './img/reg.png';
import SmarVerde from './img/r.png';
import Mapa from './img/ubicacion.png';
import './Descargar.css'
import Carousel from './Carousel';

const Descargar = () => {
    const listImg = [
        SmarMorado,
        LogIn,
        DatosUs,
        SmarVerde,
        Mapa
    ]
    return (
        
        <div className='flex justify-center'>
            <div className='justify-center inline-block dark:bg-slate-900 max-w-screen-xl'>
            <div className='flex grid-cols-2 items-center content-center mt-8 ml-0 md:ml-10 lg:ml-28'>{/*flex grid-cols-2 gap-2  */}
                <div className='flex justify-center ml-8  h-20 w-20 min-w-max min-h-max md:h-32 md:w-32 lg:h-40 lg:w-40 transform duration-700 '>
                    <img src={Logo} />
                </div>
                <div className='grip grip-cols-2  ml-4 justify-center md:ml- md:mt-10 lg:ml-20 '>
                    <div className='flex text-black  text-xl font-semibold  md:text-4xl lg:text-5xl transform duration-700 dark:text-gray-200'>
                        <h1>Healthert</h1>
                    </div>
                    <div className='flex justify-center text-black text-xs w-max  md:text-sm lg:text-base dark:text-gray-200'>
                        <p>Aplicación móvil de monitoreo y alerta remota</p>
                    </div>
                    <div className='text-sm'>
                        <Button link={""} text={"Descargar"}  ></Button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 items-center content-center gap-0 md:grid-cols-2'>
                <div className='flex justify-center mt-16 md:mt-20 md:ml-6 md:p-2 mb-6'>
                    <Carousel autoSlide={true}>
                        {listImg.map((s)=>(<img src={s} key={s} className='w-96 rounded-3xl'/>))}
                    </Carousel>
                </div>
                <div className='flex justify-center mx-10 text-black font-medium md:mt-24 md:justify-start md:mr-20 dark:text-gray-200'>
                    <p>
                        Healthert permite al usuario realizar un seguimiento de los datos médicos de algún familiar o paciente en tiempo real.<br/><br/>
                        Solo descarga la aplicación en tu telefono móvil y conecta con un reloj inteligente para tener un monitoreo del ritmo cardiaco, ubicación y recordatorio de medicamentos.<br/><br/>
                        Esta aplicación te ayudará a mantener un buen seguimiento del estado de salud de tu familiar o paciente que porta el reloj, de esta manera, al registrarse un dato anormal en las mediciones médicas, Healthert inmediatamente te mandará una notificación a tu celular con el dato y la ubicación del individuo, con el objetivo de que la ayuda pueda acudir a tiempo y evitar situaciones desafortunadas.<br/>
                    </p>
                </div>

            </div>
        </div>
        </div>
    );
}

export default Descargar;
