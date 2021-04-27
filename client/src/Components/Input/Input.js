import React, { useState } from "react"
import "./input.css"

const Input = ({placeholder, handleInputEvent}) => {
    const [val, setVal] = useState("")
    const handleInputChange = (e) => {
        setVal(e.target.value)
        handleInputEvent(e.target.value)
    }
    return (
        <input className="input" value={val} onChange={handleInputChange} placeholder={placeholder} />
    )
}

export default Input