import React, {useEffect} from 'react'
import ModalContent from '../ModalContent'
import PostIt from '../PostIt'
import './Table.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import EmptyList from './../EmptyList'

const Table = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state => state.post.postList)
    const user = useSelector(state => state.user)
    const { username } = user.user
    useEffect(() => {
        if(username === ''){
            navigate("/")
        }
    }, [])
    return (
        <section className="table">
            <div className="table__inner">
                <ModalContent />
                {state.length ? state.map(post => <PostIt key={post.id} text={post.text} color={post.color} />) : <EmptyList />}
            </div>
        </section>
    )
}

export default Table
