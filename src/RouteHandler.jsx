import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Layout from './Layout'
import AdminPage from './pages/admin/AdminPage'
import GuestPage from './pages/guest/GuestPage'
import Login from './pages/login/Login'

const RouteHandler = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Routes>
        <Route
          exact
          element={<Login navigate={navigate} />}
          path='/'
        />
        <Route element={<Layout navigate={navigate} />}>
          <Route
            exact
            element={<AdminPage navigate={navigate} />}
            path='/admin'
          />
          <Route
            exact
            element={<GuestPage navigate={navigate} />}
            path='/guest'
          />
        </Route>
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
    </div>
  )
}

export default RouteHandler
