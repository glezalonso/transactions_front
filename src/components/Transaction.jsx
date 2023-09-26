import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const Transaction = ({ transacion }) => {
  return (
    <>
      <div className="w-100 d-flex bg-light my-1  py-3 px-1  justify-content-between shadow-lg rouded bordered ">
        <div className="w-100 d-flex fw-bold gap-1 align-items-center">
          <span
            style={
              Number(transacion?.amount) < 0
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
          } fw-bold mx-1 align-items-center d-flex gap-1`}
        >
          {transacion?.amount}
          <BsChevronDown />
        </span>
      </div>
    </>
  )
}

export default Transaction
