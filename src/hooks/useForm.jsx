import { useState } from "react";

const useForm = () => {
    const [formData, setFormData] = useState(null)
    const [picData, setPicData] = useState(null)

    const handleFormDataChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }
    const handleFormPicChange = ({ target: { files } }) => {
        setPicData(files[0])
        console.log(files[0])
    }

    return { formData, handleFormDataChange, handleFormPicChange, picData }

}

export default useForm