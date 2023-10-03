import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <button
            type='submit'
            className='text-white hover:cursor-pointer bg-verde text-xl py-3 px-6 flex justify-start items-center rounded-full hover:bg-green-700 hover:transition-all duration-300 hover:drop-shadow-xl hover:scale-105'
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Button