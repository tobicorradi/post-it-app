import React, {useState} from 'react'
import ModalContent from '../ModalContent'
import PostIt from '../PostIt'
import './Table.css'
const Table = () => {
   const postList = [{id: 1, text: 'This is a sample text', color: '#33333'}, {id: 2, text: 'This is a sample text', color: '#33333'}]
    return (
        <section className="table">
            <div className="table__inner">
               <ModalContent />
               {postList.map(post => <PostIt text={post.text}/>)}
            </div>
        </section>
    )
}

export default Table
