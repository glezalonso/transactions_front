import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import TransactionContext from '../context/TransactionContext'

const CardBalance = () => {
  // traemos las tran sacciones

  const { transactions } = useContext(TransactionContext)

  // sacamos cuentas del array
  const cuentas = transactions?.map((trans) => trans.amount)

  // filtramos los ingresos sin son mayores a 0  es ingreso y recorremos el array con el reduce y sumamos las cuentas
  const ingresos = cuentas
    ?.filter((trans) => Number(trans) > 0)
    .reduce((acc, item) => (acc += Number(item)), 0)

  // De igual manera filtramos los ingresos si son menores a 0 son gastos y recorremos el array y sumamos las cuentas
  const gastos =
    cuentas
      ?.filter((trans) => Number(trans) < 0)
      .reduce((acc, item) => (acc += Number(item)), 0) * -1

  return (
    <Card className="my-4 blodk rounded-lg shadow-xs bordered mx-auto ">
      <div className="w-100 justify-content-center text-center items-center mt-3 p-2 ">
        <span className="fw-bold">Balance del mes</span>
        <p className="fs-1 fw-bold text-primary">
          $ {Number(ingresos) - Number(gastos)}
        </p>
      </div>
      <div className="d-flex justify-content-between mb-2 w-100">
        <div className="w-100 text-center text-success">
          <span>Ingresos</span>
          <p className="fs-1 fw-bold">$ +{ingresos}</p>
        </div>
        <div className="divider" />
        <div className="w-100 text-center text-danger">
          <span>Gastos</span>
          <p className="fs-1 fw-bold">- ${gastos}</p>
        </div>
      </div>
      <div className="d-flex justify-content-center p-4 text-muted">
        Ver analíticas
      </div>
    </Card>
  )
}

export default CardBalance
