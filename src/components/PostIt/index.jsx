import React from 'react'
import Draggable from 'react-draggable'
import './PostIt.css'
const PostIt = ({text, color}) => {
    return (
        <Draggable>
            <div className="post-it">
                <p>{text}</p>
            </div>
        </Draggable>
    )
}

export default PostIt
