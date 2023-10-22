const validateEmail = (email) => {
    if (email.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")) {
        return true
    } else {
        throw new Error("Email invalido")
    }
}

const validatePassword = (password) => {
    if (password.match("((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9])+")) {
        return true
    } else {
        throw new Error("Contrasena invalida")
    }
}

export const validateUser = (email, password) => validateEmail(email) && validatePassword(password)