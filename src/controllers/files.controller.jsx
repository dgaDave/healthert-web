import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase'


export const postPic = async (userRef, file) => {
    await uploadBytes(ref(storage, "profiles/" + userRef), file).then(snapshot => {
        console.log(snapshot)
    })
}

export const getPic = async (userRef) => {
    const url = await getDownloadURL(ref(storage, "profiles/" + userRef))
    return url
}