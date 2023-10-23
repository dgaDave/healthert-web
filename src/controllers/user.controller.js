import { doc, setDoc } from '@firebase/firestore'
import { firestoreDB } from '../firebase'

export const postUser = async (userid, nombreC, telefono, nombreHospital, rfc, licencia, rol) => {
    const userRef = doc(firestoreDB, 'users', userid)
    await setDoc(userRef, {
        nombrec: nombreC,
        telefono: telefono,
        nombreHospital: nombreHospital,
        rfc: rfc,
        licencia: licencia,
        rol: rol
    })
}