import React, { useState } from 'react'
import Draggable from 'react-draggable'
import './PostIt.css'
const PostIt = ({text, color}) => {
    const [isDragging, setIsDragging] = useState(false)
    const handleDrag = () => {
        setIsDragging(!isDragging)
    }
    return (
        <Draggable onStart={handleDrag} onStop={handleDrag}>
            <div style={{maxWidth: 176}}>     
                <div style={{transform: 'rotate(1deg)', background: color}} className={`post-it ${ isDragging ? 'dragging' : ''}`}>
                    <p style={{transform: 'rotate(-1deg)'}}>{text}</p>
                </div>
            </div>
        </Draggable>
    )
}

export default PostIt
