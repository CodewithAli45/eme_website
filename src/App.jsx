import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/about' />
        <Route path='/project' />
        <Route path='/career' />
      </Routes>
    </BrowserRouter>
  )
}
