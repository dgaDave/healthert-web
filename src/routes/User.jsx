import { useState } from 'react'

const User = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
        console.log(user)
    }

    return (
        <div>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='El email mamalom' onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Password' onChange={handleChange} />
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default User