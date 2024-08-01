import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
// import SideBar from './components/side_bar/SideBar'
import AdminPage from './pages/admin/AdminPage'
import GuestPage from './pages/guest/GuestPage'
import Login from './pages/login/Login'
// import validation from './validation/validation'
const RouteHandler = () => {
  // const { isAdmin } = validation()
  const navigate = useNavigate()
  // const isLogin = location.pathname === '/'
  // const content = isAdmin() ? (
  //   <AdminPage navigate={navigate} />
  // ) : (
  //   <GuestPage navigate={navigate} />
  // )
  return (
    <div>
      {/* {!isLogin && <SideBar content={content} />} */}
      <Routes>
        <Route
          exact
          element={<Login navigate={navigate} />}
          path='/'
        />
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

        {/* <Route
          element={
            <Navigate
              replace
              to='/'
            />
          }
          path='*'
        /> */}
      </Routes>
    </div>
  )
}

export default RouteHandler
