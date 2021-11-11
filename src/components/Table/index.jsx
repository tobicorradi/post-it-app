import React, {useState} from 'react'
import Button from '../Button'
import Modal from 'react-modal'
import './Table.css'
const Table = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const handleButton = () => {
        setModalIsOpen(!modalIsOpen)
    }
    const colorOptions = ['#66e0ff', '#66e0ff', '#66e0ff', '#66e0ff']
    return (
        <section className="table">
            <div className="table__inner">
                You have no Post It notes created
                <Button onClick={handleButton} text={'Crear Post It'} />
                <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                    <h2>Crea tu post it</h2>
                    <form>
                        <textarea placeholder="Terminar feature..."></textarea>
                    </form>
                    {colorOptions.map(color => <div>{color}</div>)}
                    <Button onClick={handleButton} text={'Cancel'} />
                    <Button onClick={handleButton} text={'Guardar'} />
                </Modal>
            </div>
        </section>
    )
}

export default Table
