import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import CompletedProject from './Pages/Projects/CompletedProject'
import OngoingProject from './Pages/Projects/OngoingProject'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' />
        <Route path='/ongoing-project' element={<OngoingProject />} />
        <Route path='/completed-project' element={<CompletedProject />} />
        <Route path='/career' />
      </Routes>
    </BrowserRouter>
  )
}
