import React, {useState} from 'react'
import Button from '../Button'
import Modal from 'react-modal'
const Table = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const handleButton = () => {
        setModalIsOpen(!modalIsOpen)
    }
    return (
        <section>
            You have no Post It notes created
            <Button onClick={handleButton} text={'Crear Post It'} />
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}>
                <Button onClick={handleButton} text={'Cancel'} />
            </Modal>
        </section>
    )
}

export default Table
