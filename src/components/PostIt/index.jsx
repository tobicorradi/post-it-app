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
            <div style={{background: color}} className={`post-it ${ isDragging ? 'dragging' : ''}`}>
                <p>{text}</p>
            </div>
        </Draggable>
    )
}

export default PostIt
