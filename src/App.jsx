import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Landing from "./routes/Landing"
import Error from "./routes/Error"
import { AuthProvider } from "./context/authContext"
import LogIn from "./routes/LogIn"
import AppMain from './routes/AppMain'

const router = createBrowserRouter([
  {
    path: "/healthert-web/",
    element: <Landing />,
    errorElement: <Error />
  },
  {
    path: 'healthert-web/login',
    element: <LogIn />,
    errorElement: <Error />
  },
  {
    path: 'healthert-web/signup'
  },
  {
    path: 'healthert-web/app',
    element: <AppMain />
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