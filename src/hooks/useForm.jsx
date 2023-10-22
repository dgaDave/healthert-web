import { useState } from "react";

const useForm = () => {
    const [formData, setFormData] = useState(null)
    
    const handleFormDataChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }

    return {formData, handleFormDataChange}

}

export default useForm