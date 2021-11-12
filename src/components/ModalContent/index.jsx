import React, {useState} from 'react'
import Modal from 'react-modal'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../../actions'

const ModalContent = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.postList)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [newPost, setNewPost] = useState({
        id: state.length + 1,
        text: '',
        color: '',
    })
    const handleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleModal()
        dispatch(createPost(newPost))
    }
    const handleChange = (e) => {
        const {name, value} = e.target
        setNewPost({
            ...newPost,
            [name] : value
        })
    }
    const colorOptions = ['#66e0ff', '#66e0ff', '#66e0ff', '#66e0ff']
    return (
        <>
            <Button onClick={handleModal} text={'Create Post It'} />
            <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                <h2>Crea tu post it</h2>
                <form onSubmit={handleSubmit}>
                    {colorOptions.map((color, index) => <input key={index} onChange={handleChange} type="radio" value={color} name="color" />)}
                    <textarea onChange={handleChange} name="text" placeholder="Terminar feature..."></textarea>
                </form>
                <Button onClick={handleModal} text={'Cancel'} />
                <Button type={'submit'} onClick={handleSubmit} text={'Guardar'} />
            </Modal>
        </>
    )
}

export default ModalContent
