import React from "react"
import "./button.css"

const Button = ({ type, handleClickEvent }) => {
    return (
        <div className="button" onClick={handleClickEvent} >{type}</div>
    )
}

export default Button