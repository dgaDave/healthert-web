import Inicio from '../components/Inicio/Inicio'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import ListServ from '../components/ListServ/ListServ'
import Planes from '../components/Planes/Planes'
import Funciones from '../components/Funciones/Funciones'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'


const Landing = () => {


  const { user, loading } = useAuth()

  if (loading) {
    return <div>Hola</div>
  }

  if(user){
    return <Navigate to="/healthert-web/app" />
  }

  return (
    <>
      <NavBar link="login" text="Iniciar sesion" />
      <Inicio />
      <ListServ />
      <Planes />
      <Funciones />
      <Footer />
    </>
  )

}

export default Landing