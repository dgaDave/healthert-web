import { collection, getDocs, query, where, addDoc } from '@firebase/firestore'
import { firestoreDB, realtimeDB } from '../firebase'
import { onValue, ref } from 'firebase/database'

const pacientsRef = collection(firestoreDB, 'users')

export const postPacient = async (userData) => {
    const docRef = await addDoc(pacientsRef, userData)
    return docRef.id
}

export const getPacients = async (userid) => {
    const querySnapshot = await getDocs(query(pacientsRef, where("idCuidador", "==", userid)))
    const pacients = []
    querySnapshot.forEach((doc) => {
        const id = doc.id
        const data = doc.data()
        pacients.push({ ...data, id: id })
    })
    return pacients
}

export const getBpm = async (userRef, setValue) => {
    const bpmReference = ref(realtimeDB, 'medicionTr/' + userRef + "/bpm")
    onValue(bpmReference, (snapshot) => {
        setValue(snapshot.val())
    })
}

export const getLocation = async (userRef, setValue) => {
    const locationReference = ref(realtimeDB, 'medicionTr/' + userRef + '/coordenadas')
    onValue(locationReference, (snapshot) => {
        setValue(snapshot.val())
    })
}