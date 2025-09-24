import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Doctors from './pages/Doctors.jsx'
import Profile from './pages/Profile.jsx'

export default function App(){
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/doctors" replace />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  )
}
