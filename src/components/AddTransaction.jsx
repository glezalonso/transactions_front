import React from 'react'
import { Button } from 'react-bootstrap'

const AddTransaction = ({ handleShow }) => {
  return (
        <>
        <Button style={{ background: ' #4a65a3' }} className='d-flex  justify-content-center sticky w-75 mx-auto' onClick={() => handleShow()}>
            Agregar movimiento
        </Button>

        </>
  )
}

export default AddTransaction
