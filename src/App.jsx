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
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>
    <NavBar/>
    <div className='h-screen'></div>
    <Footer/>
    </>
  )
}

export default App
