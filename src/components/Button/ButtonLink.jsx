import { Link } from "react-router-dom"

const Button = ({ text, link, svg }) => {
    return (
        <Link to={link}
            className="text-white hover:cursor-pointer bg-verde text-xl py-3 px-6 flex justify-start items-center rounded-full hover:bg-green-700 hover:transition-all duration-300 hover:drop-shadow-xl hover:scale-105"
        >
            <span>{svg}</span>
            <span>{text}</span>
        </Link>
    )
}
export default Button
