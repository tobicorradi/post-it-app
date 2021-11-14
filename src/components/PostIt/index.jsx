import React, { useState } from 'react'
import Draggable from 'react-draggable'
import {ReactComponent as ThreeDots} from './../../assets/icons/dots.svg'
import { Rnd } from 'react-rnd'
import './PostIt.css'
const PostIt = ({text, color}) => {
    const [active, setActive] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const handleDrag = () => {
        setIsDragging(!isDragging)
    }
    return (
        <Rnd style={{transform: 'rotate(1deg)', background: color}} className={`post-it ${ isDragging ? 'dragging' : ''}${ active ? 'active' : ''}`}>
            <div onClick={() => setActive(true)} style={{maxWidth: 176}}>     
                {active ? <ThreeDots /> : null}
                <div className={`${ active ? 'active' : ''}`}>
                    <p style={{transform: 'rotate(-1deg)'}}>{text}</p>
                </div>
            </div>
        </Rnd>
    )
}

export default PostIt
