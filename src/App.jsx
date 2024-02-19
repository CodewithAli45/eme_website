import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' />
        <Route path='/project' />
        <Route path='/career' />
      </Routes>
    </BrowserRouter>
  )
}
