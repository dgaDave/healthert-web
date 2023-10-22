import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Landing from "./routes/Landing"
import Error from "./routes/Error"
import { AuthProvider } from "./context/authContext"
import LogIn from "./routes/LogIn"
import AppMain from './routes/AppMain'
import ProtectedRoute from './routes/ProtectedRoute'
import RedirectingRoute from './routes/RedirectingRoute'
import SignUp from "./routes/SignUp"
import GoogleMap from "./components/GoogleMap/GoogleMap"

const router = createBrowserRouter([
  {
    path: "/healthert-web/",
    element: <RedirectingRoute><Landing /></RedirectingRoute>,
    errorElement: <Error />
  },
  {
    path: 'healthert-web/login',
    element: <RedirectingRoute><LogIn /></RedirectingRoute>,
    errorElement: <Error />
  },
  {
    path: 'healthert-web/signup',
    element: <RedirectingRoute><SignUp /></RedirectingRoute>
  },
  {
    path: 'healthert-web/app',
    element: <ProtectedRoute><AppMain /></ProtectedRoute>
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