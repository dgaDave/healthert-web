import ButtonCard from "../Button/ButtonCard/ButtonCard"
export const CardPlanes = ({planes}) => {
  return (
    <div className="mx-auto flex flex-col md:flex-row justify-center lg:md:space-x-12 md:space-y-0 space-y-8">
      {planes.map((plan, index) => (
        <div
          key={index}
          className="w-full max-w-md p-4 g-white border border-gray-200 rounded-lg shadow md:p-8 dark:bg-gray-800 dark:border-gray-700 transition-transform hover:scale-105 duration-300">
          <h5 className="mb-4 text-xl font-roboto font-bold text-gray-400 dark:text-gray-300 text-center">
            {plan.titulo} </h5>
          <div className="flex items-baseline text-verde dark:text-verde justify-center">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight text-verde dark:text-verde">
              {plan.precio}
            </span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              {plan.periodo}
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7">
            {plan.caracteristicas.map((caracteristica, idx) => (
              <li
                key={idx}
                className="flex space-x-3 items-center text-base font-normal leading-tight text-gray-500 dark:text-gray-400 text-center">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-verde dark:text-morado"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" viewBox="0 0 20 20" >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span>{caracteristica}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <ButtonCard text="¡Descarga y contrata!" className="btn-card" />
          </div>
        </div>
      ))}
    </div>
  )
}