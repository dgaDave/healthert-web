import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { firestoreDB } from '../firebase'
import { auth } from '../firebase'
import { validateUser } from '../validations/user.validation'
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error("No existe el proveedor de autenticacion")
    return context
}

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUp = async (email, password, nombreC, telefono, nombreHospital, rfc, licencia, admin) => {

        try {
            if (validateUser(email, password)) {
                await createUserWithEmailAndPassword(auth, email, password).
                    then(async (userCredential) => {
                        const uid = userCredential.user.uid
                        await setDoc(doc(firestoreDB, "users", uid), {
                            nombrec: nombreC,
                            telefono: telefono,
                            nombreHospital: nombreHospital,
                            rfc: rfc,
                            licencia: licencia,
                            type: admin
                        })
                    })
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => signOut(auth)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])


    return <authContext.Provider value={{ user, logIn, signUp, logOut, loading }}>{children}</authContext.Provider>
}