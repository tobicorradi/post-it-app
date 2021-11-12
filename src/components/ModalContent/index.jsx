import React, {useState} from 'react'
import Modal from 'react-modal'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
const ModalContent = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.postList)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [newPost, setNewPost] = useState({
        text: '',
        color: '',
    })
    const handleButton = () => {
        setModalIsOpen(!modalIsOpen)
    }
    const handleSubmit = (e, text) => {
        e.preventDefault()
        handleButton()
        const newPostObj = {
            id: state.length + 1,
            text: text,
            color: '#33333'
        }
    }
    const colorOptions = ['#66e0ff', '#66e0ff', '#66e0ff', '#66e0ff']

    return (
        <>
            <Button onClick={handleButton} text={'Create Post It'} />
            <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                <h2>Crea tu post it</h2>
                <form onSubmit={handleSubmit}>
                    {colorOptions.map(color => <input type="radio" value={color} name="color" />)}
                    <textarea placeholder="Terminar feature..."></textarea>
                </form>
                <Button onClick={handleButton} text={'Cancel'} />
                <Button onClick={handleSubmit} text={'Guardar'} />
            </Modal>
        </>
    )
}

export default ModalContent
