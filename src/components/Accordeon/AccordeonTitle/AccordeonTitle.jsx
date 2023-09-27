const AccordeonTitle = ({ item, index, activeIndex, onClick }) => {
  return (
    <h2
      id={`accordion-color-heading-${index}`}
      className={`${
        index === activeIndex ? 'text-moradoOscuro dark:text-white' : 'text-verde'
      }`}
    >
      <button
        type="button"
        className=" transition-all flex items-center justify-between w-full p-5  
                    text-3xl text-left font-bold font-roboto
                    border border-b border-verde rounded-lg
                    
                    hover:bg-gray-100 
                    dark:bg-gray-800
                    dark:border-slate-700
                    dark:hover:bg-gray-700 duration-300"
        onClick={() => onClick(index)}>
        <span>{item.titulo}</span>
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
  )
}

export default AccordeonTitle