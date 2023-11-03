import { collection, getDocs, query, where } from '@firebase/firestore'
import { firestoreDB } from '../firebase'

const pacientsRef = collection(firestoreDB, 'users')


export const getPacients = async (userid) => {
    const querySnapshot = await getDocs(query(pacientsRef, where("idCuidador", "==", userid)))
    const pacients = []
    querySnapshot.forEach((doc) => {
        pacients.push(doc.data())
    })
    return pacients
}