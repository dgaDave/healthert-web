const Button = ({ text, link, svg}) => {
    return (
        <a href={link} className= "btn-primary">
            <span>{svg}</span>
            <span> {text}</span>
        </a>
    )
}
export default Button
