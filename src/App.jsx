import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Month from './pages/Month'
import NavBar from './components/NavBar'
import formatedDate from './utils/getDate'

const App = () => {
  const date = formatedDate()

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<Navigate to={`/month/${date}`} />} />
          <Route path="/month/:date" element={<Month />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
