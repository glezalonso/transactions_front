import React, { useReducer } from 'react'
import TransactionContext from './TransactionContext'
import TransactionReducer from './TransactionReducer'

const TransactionState = ({ children }) => {
  const URL = import.meta.env.VITE_API_URL
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

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: data
      })
    } catch (error) {
      console.log(error)
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
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: globalState.transactions,
        getTransactions,
        addTransactions
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export default TransactionState
