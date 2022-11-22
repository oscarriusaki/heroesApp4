import React, { useState } from 'react'

export const useForm = (initialForm = {}) => {

    const [inputForm, setInputForm] = useState(initialForm);

    const onChange = ({ target }) => {
        const { name, value } = target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }

    return {
        ...inputForm,
        onChange,
    }
}
