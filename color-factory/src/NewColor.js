import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewColor = ({ setcolors }) => {
    const DEFAULTFORMDATA = {
        name: "", code: "#000000"
    }
    const [ formData, setFormData ] = useState(DEFAULTFORMDATA)
    const handleSubmit = evt => {
        evt.preventDefault()
        setFormData(()=> DEFAULTFORMDATA)
        setcolors(cs => [...cs, {color: formData.name, code: formData.code }])
    }
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Color Label</label>
                <input name="name" onChange={handleChange} value={formData.name}/>
                <label htmlFor="code">Color Code</label>
                <input type="color" name="code" onChange={handleChange} value={formData.code}/>
                <button>Add new color</button>
            </form>
            <Link to="/Color">Go home</Link>
        </div>
    )
}

export default NewColor