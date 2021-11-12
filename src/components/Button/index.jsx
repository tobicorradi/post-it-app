import React from 'react'
import './Button.css'

const Button = ({text, onClick, type = 'button', style, buttonType= 'primary'}) => {
    return (
        <button style={style} type={type} className={`btn ${buttonType}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
