import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import CompletedProject from './Pages/Projects/CompletedProject'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' />
        <Route path='/project' exact={true} element={<CompletedProject />} />
        <Route path='/career' />
      </Routes>
    </BrowserRouter>
  )
}
