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

import NavBar from './components/NavBar/NavBar'
import Inicio from './components/Inicio/Inicio'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <>
    <NavBar/>
    <Inicio/>
    <Footer/>
    </>
    
  )
}

export default App
