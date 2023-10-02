import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Landing from "./routes/Landing"
import Error from "./routes/Error"
import User from "./routes/User"
import { AuthProvider } from "./context/authContext"
import LogIn from "./routes/LogIn"

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
  {
    path: 'healthert-web/logIn',
    element: <LogIn />
  }
])

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App