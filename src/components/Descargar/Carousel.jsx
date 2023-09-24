import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather" //instalar "npm i react-feather" para que funcione el carousel (son los '<' y '>')

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="overflow-hidden relative w-56 h-full md:w-80 transition duration-300">
      <div
        className="flex transition-transform ease-out duration-500 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className=" rounded-full shadow bg-white/80 opacity-30 text-gray-800 hover:bg-white hover:opacity-70"
        >
          <ChevronLeft  className='w-4 h-6'/>
        </button>
        <button
          onClick={next}
          className=" rounded-full shadow bg-white/80 opacity-30 text-gray-800 hover:bg-white hover:opacity-70"
        >
        <ChevronRight  className='w-4 h-6'/>
        </button>
      </div>

      <div className="absolute bottom-2 right-0 left-0">
        <div className="flex items-center justify-center gap-2 opacity-30">
          {slides.map((_, i) => (
            <div
            key={i}
              className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}