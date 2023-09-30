import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Landing from "./routes/Landing"
import Error from "./routes/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>
  },
  {
    path:"/user",
    element:<div>Usuario</div>
  },
  {
    path: "*",
    element: <Error/>,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
