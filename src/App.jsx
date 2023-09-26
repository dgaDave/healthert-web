// Hacer cada componente en su respectiva carpeta y 
// mandarlo a llamar aqui
// NavBar
// Inicio
// Descargar
// Servicios
// Planes
// Funciones
// Nosotros
// Footer
import Inicio from './components/Inicio/Inicio'
import NavBar from './components/NavBar/NavBar'
import Descargar from './components/Descargar/Descargar'
import Footer from './components/Footer/Footer'
import ListServ from './components/ListServ/ListServ'

function App () {
  return (
    <>
    <NavBar/>
    <Inicio/>
    <Descargar/>
    <ListServ/>
    <Footer/>
    </>
  )
}

export default App
