const Button = ({ text, link }) => {
    return (
        <a href={link} 
        className="text-white hover:cursor-pointer bg-verde text-xl py-3 px-4 inline-block rounded-full hover:bg-green-700 hover:transition-all duration-300 hover:drop-shadow-xl hover:scale-105">
            {text}
        </a>
    )
}
export default Button
