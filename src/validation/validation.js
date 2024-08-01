import { getLocalStorage, setLocalStorage } from '../utilities/handleStorage'
import * as notification from '../utilities/notification'
const validation = (props) => {
  const isAdmin = () => {
    const user = JSON.parse(getLocalStorage('user'))
    return user.role === 'admin'
  }
  const getUser = (users, values) => {
    const filteredUser = users.filter(
      (data) => data.email === values.email && data.password === values.password
    )
    if (filteredUser.length > 0) {
      delete filteredUser[0].password
      setLocalStorage('user', JSON.stringify(filteredUser[0]))
      if (isAdmin()) props.navigate('/admin')
      else props.navigate('/guest')
    } else {
      notification.error('User tidak ditemukan')
    }
  }

  const isLogin = () => {
    const user = getLocalStorage('user')
    if (user) return true
    return props.navigate('/')
  }

  return { getUser, isLogin, isAdmin }
}

export default validation
