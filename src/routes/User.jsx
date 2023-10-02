import { useState} from 'react'
import { useAuth } from '../context/authContext'

const User = () => {

    const { signUp, signOut } = useAuth()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
        console.log(user)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(user.email, user.password)
        } catch (error) {
            throw new Error("Valio")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='El email mamalom' onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Password' onChange={handleChange} />
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default User