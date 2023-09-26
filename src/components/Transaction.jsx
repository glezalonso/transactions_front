import React, { useState, useContext } from 'react'
import { BsChevronDown, BsTrash } from 'react-icons/bs'
import TransactionContext from '../context/TransactionContext'

const Transaction = ({ transacion }) => {
  const [display, setDisplay] = useState(false)
  const { removeTransactions } = useContext(TransactionContext)

  return (
    <>
      <div
        className={` w-100 d-flex bg-light mt-1  py-3 px-1  justify-content-between ${
          display ? '' : 'shadow-sm border-bottom rounded-bottom'
        } `}
      >
        <div className="w-100 d-flex fw-bold gap-1 align-items-center">
          <span
            style={
              Number(transacion?.amount) > 0
                ? { background: '#81c784', height: '15px', width: '15px' }
                : { background: '#f44336', height: '15px', width: '15px' }
            }
            className="rounded-circle  mx-1"
          ></span>
          {transacion?.concept}
        </div>

        <span
          className={`${
            transacion?.amount > 0 ? 'text-success' : 'text-danger'
          } fw-bold mx-1 align-items-center d-flex gap-2`}
        >
          ${transacion?.amount}
          <BsChevronDown onClick={() => setDisplay(!display)} />
        </span>
      </div>
      {display ? (
        <div
          className={`w-100 d-flex bg-light  py-3 px-1  justify-content-between align-items-center ${
            display ? 'shadow-sm border-bottom rounded-bottom' : ''
          }   rouded bordered `}
        >
          <span className="mx-1">Para: {transacion?.reciver}</span>
          <span className="mx-1">
            Detalles: {transacion?.details}{' '}
            <BsTrash
              onClick={() => {
                const sure = confirm('Esta seguro que desea borrar?')
                if (sure) return removeTransactions(transacion?._id)
              }}
            />
          </span>
        </div>
      ) : null}
    </>
  )
}

export default Transaction
