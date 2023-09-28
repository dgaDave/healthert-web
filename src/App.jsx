import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Landing from "./routes/Landing"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <div>Hubo un error</div>
  },
  {
    path:"/user",
    element:<div>Usuario</div>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
