import React, { useState } from 'react'
import TransactionsList from '../components/TransactionsList'
import CardBalance from '../components/CardBalance'
import { Container, Row, Col } from 'react-bootstrap'
import AddTransaction from '../components/AddTransaction'
import ModalTransaction from '../components/ModalTransaction'

const Month = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={4} className="mx-auto">
            <CardBalance />
            <TransactionsList />
            <AddTransaction handleShow={handleShow} />
          </Col>
        </Row>
      </Container>
      <ModalTransaction modalShow={show} handleClose={handleClose} />
    </>
  )
}

export default Month
