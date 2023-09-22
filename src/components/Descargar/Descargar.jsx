import Button from '../Button/Button';
import Logo from './img/Logo1.svg'
const Descargar = () => {
    return (
        <div className="contetendorPadre">
            <div className="contenedorSuperior">
                <div className="contenedorSuperior--izq">
                    <div className="contenedorSuperior--izq__img">
                            <img className='h-20 w-20'
                                src={Logo}
                                alt='Logo Healthert'
                            />
                    </div>
                    <div className='contenedorSuperior--izq__text'>
                        <h1>
                            HEALTHERT
                        </h1>
                        <p>Aplicación móvil de monitoreo y alerta remota</p>
                        <Button text={"Descargar aquí"} link={"#"}></Button>
                    </div>
                </div>
                <div className="contenedorSuperior--der">

                </div>
            </div>
            <div className="contenedorBajo">
                <div className="contenedorBajo--izq">

                </div>
                <div className="contenedorBajo--der">
                    <p>
                    Healthert permite al usuario realizar un seguimiento de los datos médicos de algún familiar o paciente en tiempo real.<br/>
                    Solo descarga la aplicación en tu telefono móvil y conecta con un reloj inteligente para tener un monitoreo del ritmo cardiaco, ubicación y recordatorio de medicamentos.<br/>
                    Esta aplicación te ayudará a mantener un buen seguimiento del estado de salud de tu familiar o paciente que porta el reloj, de esta manera, al registrarse un dato anormal en las mediciones médicas, Healthert inmediatamente te mandará una notificación a tu celular con el dato y la ubicación del individuo, con el objetivo de que la ayuda pueda acudir a tiempo y evitar situaciones desafortunadas.<br/>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Descargar;
