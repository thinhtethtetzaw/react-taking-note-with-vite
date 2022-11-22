import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NewNote from "./pages/NewNote"

function App() {

  return (
    <Routes>
      <Route path='/' element={<h1 className='text-red-400'>Home</h1>} />
      <Route path='/new' element={<NewNote />} />
      <Route path='/:id'>
        <Route index element={<h1>show</h1>} />
        <Route path='edit' element={<h1>edit</h1>} />
      </Route>
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
