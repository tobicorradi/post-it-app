import React, {useState} from 'react'
import ModalContent from '../ModalContent'
import PostIt from '../PostIt'
import './Table.css'
import { useSelector, useDispatch } from 'react-redux'
import EmptyList from './../EmptyList'

const Table = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.postList)
    return (
        <section className="table">
            <div className="table__inner">
                <ModalContent />
                {state.length ? state.map(post => <PostIt text={post.text} color={post.color} />) : <EmptyList />}
            </div>
        </section>
    )
}

export default Table
