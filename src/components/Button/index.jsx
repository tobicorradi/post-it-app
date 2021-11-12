import React from 'react'
import './Button.css'

const Button = ({text, onClick, type = 'button', style}) => {
    return (
        <button style={style} type={type} className="btn" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
