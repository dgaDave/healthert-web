import { collection, getDocs, query, where } from '@firebase/firestore';
import { ref, get } from 'firebase/database';
import { firestoreDB, realtimeDB } from '../firebase';

const usuarios = collection(firestoreDB, 'users')

export const getRealtimeData = async (ruta) => {
    const consulta = ref(realtimeDB, 'medicionTr/' + ruta)
    const snapshot = await get(consulta)
    if (snapshot.exists()) {
        const realTimeData = snapshot.val()
        return realTimeData
    } else {
        throw new Error('ñaca ñaca')
    }
}