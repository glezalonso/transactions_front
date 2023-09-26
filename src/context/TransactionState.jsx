import React, { useReducer } from 'react'
import TransactionContext from './TransactionContext'
import TransactionReducer from './TransactionReducer'
import toast from 'react-hot-toast'

const TransactionState = ({ children }) => {
  const URL = import.meta.env.VITE_API_URL_DEV
  const initialState = {
    transactions: []
  }

  const [globalState, dispatch] = useReducer(TransactionReducer, initialState)

  const addTransactions = async (body) => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      const data = await response.json()
      toast.success('Movimiento exitoso')
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: data
      })
    } catch (error) {
      console.log(error)
      toast.error('Hubo un error en el movimiento')
    }
  }

  const removeTransactions = async (id) => {
    try {
      const response = await fetch(URL + id, {
        method: 'DELETE'
      })

      const data = await response.json()

      toast.success('eliminado exitoso')
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: data._id
      })
    } catch (error) {
      console.log(error.error)
      toast.error('Hubo un error en el movimiento')
    }
  }

  const getTransactions = async (date) => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      const info = data.filter((data) => data.date.includes(date))

      dispatch({
        type: 'READ_TRANSACTION',
        payload: info
      })
    } catch (error) {
      console.log(error)
      toast.error('Hubo un error al cargar los movimientos')
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: globalState.transactions,
        getTransactions,
        addTransactions,
        removeTransactions
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export default TransactionState
