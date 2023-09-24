const AccordeonCard = ({ item, index, activeIndex }) => {
  return (
    <div
        id={`accordion-color-${index}`}
        data-accordion="collapse"
        data-active-classes="bg-blue-100 
                             dark:bg-gray-800 
                             text-blue-600 
                             dark:text-white"
        key={index}
        className={`overflow-hidden transition-all duration-300 ${
          index === activeIndex ? 'max-h-96' : 'max-h-0'
        }`} 
      >
        <div
         className={`p-5 border-r 
                    border-verde border-l 
                      rounded-b border-b rounded-t
                    dark:border-white 
                    dark:bg-gray-900
                    text-morado ${
          index === activeIndex ? 'opacity-100' : 'opacity-70'
        }`}
        >
          <p className="mb-2 text-gray-400 dark:text-white font-roboto">
            {item.contenido}
          </p>
          <img
             src={item.img}
             className="mx-auto max-w-full h-auto md:max-w-sm md:h-auto lg:max-w-md lg:h-auto xl:max-w-lg xl:h-auto rounded-lg shadow-xl"
             alt={`Imagen para ${item.titulo}`}
          />
        </div>
  </div>
  )
}
export default AccordeonCard