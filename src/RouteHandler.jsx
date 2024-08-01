import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'

const RouteHandler = () => {
  const navigate = useNavigate()
  return (
    <Routes>
      <Route
        element={<Login navigate={navigate} />}
        path='/'
      />
      <Route
        element={<Dashboard navigate={navigate} />}
        path='/dashboard'
      />
      <Route
        element={
          <Navigate
            replace
            to='/'
          />
        }
        path='*'
      />
    </Routes>
  )
}

export default RouteHandler
