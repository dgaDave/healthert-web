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

import { Funciones } from "./components/Funciones/Funciones"
import{Planes} from "./components/Planes/Planes"


function App() {
  return (
    <>
        <Planes></Planes>
        <Funciones></Funciones>
    </>
  )
}

export default App
