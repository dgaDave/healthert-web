const Button = ({ text, link }) => {
    return (
        <a href={link} className= "btn-primary">
            {text}
        </a>
    )
}
export default Button
