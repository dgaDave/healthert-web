import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Landing from "./routes/Landing"
import Error from "./routes/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />
  },
  {
    path: "/user",
    element: <div>Prueba de usuario</div>
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
