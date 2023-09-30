import { useRouteError } from "react-router-dom"
import Hearth from "../components/ListServ/svg/Hearth"

const Error = () => {

  const error = useRouteError()
  console.log(error.statusText)
  return (
    <div className="flex flex-col mt-52 lg:mt-0 xl:mt-0 md:mt-10 xl:gap-y-0 lg:gap-y-0 md:gap-y-0  items-center justify-center md:min-h-screen lg:min-h-screen xl:min-h-screen">
      <h1 className="xl:mt-14 md:mt-32 lg:mt-32 text-3xl ml-4 md:text-5xl sm:text-4xl lg:text-6xl mb-3 dark:text-red-500 text-moradoOscuro font-bold sm:text-center">HA OCURRIDO UN ERROR...</h1>
      <p className="text-xl ml-0 mb-3 mt-6 md:mt-3 xl:mt-4 md:text-2xl sm:text-2xl lg:text-2xl xl:text-3xl  dark:text-white text-gray-500  sm:text-center">
        {error.statusText || error.message}
      </p>
      <div className="my-12  animate-heartBeat items-center">
        <Hearth />
      </div>
    </div>
  )
}
export default Error