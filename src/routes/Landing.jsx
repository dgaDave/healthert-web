import Inicio from '../components/Inicio/Inicio'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import ListServ from '../components/ListServ/ListServ'
import Planes from '../components/Planes/Planes'
import Funciones from '../components/Funciones/Funciones'
import {useAuth} from '../context/authContext'


const Landing = () => {
  
  const {user} = useAuth()

  return (
    <>
      <div>Usuario: {user.email}</div>
      <NavBar link="logIn" text="Iniciar sesion" />
      <Inicio />
      <ListServ />
      <Planes />
      <Funciones />
      <Footer />
    </>
  )

}

export default Landing