import Inicio from '../components/Inicio/Inicio'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import ListServ from '../components/ListServ/ListServ'
import Planes from '../components/Planes/Planes'
import Funciones from '../components/Funciones/Funciones'

const Landing = () => {
  return (
    <>
    <NavBar/>
    <Inicio/>
    <ListServ/>
    <Planes/>
    <Funciones/>
    <Footer/>
    </>
  )
}

export default Landing