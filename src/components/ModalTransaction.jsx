import React, { useState, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import TransactionContext from '../context/TransactionContext'

const ModalSports = ({ modalShow, handleClose }) => {
  const { addTransactions } = useContext(TransactionContext)
  const [data, setData] = useState({
    date: '',
    concept: '',
    amount: '',
    reciver: '',
    details: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addTransactions(data)
    setData({ date: '', concept: '', amount: '', reciver: '', details: '' })
    handleClose()
  }
  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Modal
        className="text-dark"
        show={modalShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Agregar movimiento</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="text"
                id="date"
                name="date"
                onChange={(e) => handleOnChange(e)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Concepto</Form.Label>
              <Form.Control
                type="text"
                id="concept"
                name="concept"
                onChange={(e) => handleOnChange(e)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                id="amount"
                name="amount"
                onChange={(e) => handleOnChange(e)}
              ></Form.Control>
            </Form.Group>
            <Form.Label>Destinatario</Form.Label>
            <Form.Control
              type="text"
              id="reciver"
              name="reciver"
              onChange={(e) => handleOnChange(e)}
            ></Form.Control>
            <Form.Label>Detalles</Form.Label>
            <Form.Control
              type="text"
              id="details"
              name="details"
              onChange={(e) => handleOnChange(e)}
            ></Form.Control>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cerrar
            </Button>
            <Button style={{ background: ' #4a65a3' }} type="submit">
              Crear Movimiento
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default ModalSports
