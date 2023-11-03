import { collection, getDocs, query, where } from '@firebase/firestore'
import { firestoreDB } from '../firebase'

const pacientsRef = collection(firestoreDB, 'users')

export const getPacientsCurp = async (userid) => {
    const querySnapshot = await getDocs(query(pacientsRef, where("usuarioCuidador", "==", userid)))
    const pacients = []
    querySnapshot.forEach((doc) => {
        pacients.push(doc.data())
    })
    const curps = pacients.map((paciente) => paciente.curp)
    return curps
}