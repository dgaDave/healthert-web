const Button = ({ text, link }) => {
    return (
        <a href={link} className= "btn-card">
            {text}
        </a>
    )
}
export default Button
