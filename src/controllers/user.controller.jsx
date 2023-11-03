import { doc, getDoc, setDoc } from '@firebase/firestore'
import { firestoreDB } from '../firebase'

export const postUser = async (userid, userData) => {
    const userRef = doc(firestoreDB, 'users', userid)
    await setDoc(userRef, userData)
}

export const getUser = async (userid) => {
    const userRef = doc(firestoreDB, 'users', userid)
    const docSnapshot = await getDoc(userRef)
    if (docSnapshot.exists()) {
        return docSnapshot.data()
    } else {
        throw new Error("Usuario no encontrado")
    }
}