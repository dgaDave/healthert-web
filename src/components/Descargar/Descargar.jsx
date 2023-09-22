import Button from '../Button/Button';
import Logo from './img/Logo1.svg'
import './Descargar.css'
const Descargar = () => {
    return (
        
        <div>
            <div className='flex grid-cols-2 gap-2'>
                <div className='flex justify-center ml-10  mt-8 h-24 w-24 min-w-max min-h-max md:h-32 md:w-32 lg:h-40 lg:w-40 transform duration-700'>
                    <img src={Logo} />
                </div>
                <div className='grip grip-cols-2   justify-center mr-1 ml-6 mt-8 h-24 w-24 md:ml-10 md:mt-10 lg:ml-20'>
                    <div className='flex text-black text-3xl font-bold tracking-wider md:text-4xl lg:text-5xl transform duration-700'>
                        <h1>Healthert</h1>
                    </div>
                    <div className='flex justify-center text-black text-sm '>
                        <p>Aplicación móvil de monitoreo y alerta remota</p>
                    </div>
                    <div className='text-sm'>
                        <Button link={""} text={"Descargar"}></Button>
                    </div>
                </div>
            </div>
            <div className='flex grid-cols-1 gap-2 lg:grid-cols-2'>
                <div>
                   {/*Div para carrusel*/} 
                </div>
                <div>
                    {/*Div para texto que acompana*/}
                </div>

            </div>
        </div>
    );
}

export default Descargar;
