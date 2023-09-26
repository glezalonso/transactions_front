import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

const Transaction = ({ transacion }) => {
  const [display, setDisplay] = useState(false)

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
          className={`w-100 d-flex bg-light  py-3 px-1  justify-content-between ${
            display ? 'shadow-sm border-bottom rounded-bottom' : ''
          }   rouded bordered `}
        >
          <span>Para: {transacion?.reciver}</span>
          <span>Detalles: {transacion?.details}</span>
        </div>
      ) : null}
    </>
  )
}

export default Transaction
