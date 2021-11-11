import React from 'react'
import './PostIt.css'
const PostIt = ({text, color}) => {
    return (
        <div className="post-it">
            <p>{text}</p>
        </div>
    )
}

export default PostIt
