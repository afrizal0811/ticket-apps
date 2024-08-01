import React, { useEffect } from 'react'
import validation from '../../validation/validation'
const GuestPage = (props) => {
  const { isLogin } = validation(props)

  useEffect(() => {
    isLogin()
  }, [isLogin])

  return <div>GuestPage</div>
}

export default GuestPage
