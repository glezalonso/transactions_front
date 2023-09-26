import React, { useEffect, useContext } from 'react'
import Transaction from './Transaction'
import TransactionContext from '../context/TransactionContext'
import { useParams } from 'react-router-dom'

const TransactionsList = () => {
  const { date } = useParams()
  const { transactions, getTransactions } = useContext(TransactionContext)

  useEffect(() => {
    const fetchData = async () => {
      await getTransactions(date)
    }

    fetchData()
  }, [date])

  return (
    <>
      <section className="w-100">
        <ul className="list-unstyled">
          {transactions?.map((transacion) => (
            <Transaction key={transacion?.id} transacion={transacion} />
          ))}
        </ul>
      </section>
    </>
  )
}

export default TransactionsList
