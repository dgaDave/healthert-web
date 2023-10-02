import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Landing from "./routes/Landing"
import Error from "./routes/Error"
import User from "./routes/User"
import { AuthProvider } from "./context/authContext"

const router = createBrowserRouter([
  {
    path: "/healthert-web/",
    element: <Landing />,
    errorElement: <Error />
  },
  {
    path: "/healthert-web/user",
    element: <User />
  },
])

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App