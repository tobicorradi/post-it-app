import React, {useState} from 'react'
import ModalContent from '../ModalContent'
import PostIt from '../PostIt'
import './Table.css'
const Table = () => {
   
    return (
        <section className="table">
            <div className="table__inner">
               <ModalContent />
               <PostIt text={'test'}/>
            </div>
        </section>
    )
}

export default Table
