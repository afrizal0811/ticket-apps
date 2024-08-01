import React, { useEffect } from 'react'
import validation from '../../validation/validation'
const AdminPage = (props) => {
  const { isLogin } = validation(props)

  useEffect(() => {
    isLogin()
  }, [isLogin])

  return <div>AdminPage</div>
}

export default AdminPage
