import * as notification from '../utilities/notification'
import { setLocalStorage } from '../utilities/handleStorage'
const validation = (props) => {
  const getUser = (users, values) => {
    const filteredUser = users.filter(
      (data) => data.email === values.email && data.password === values.password
    )
    if (filteredUser.length > 0) {
      delete filteredUser[0].password
      setLocalStorage('user', JSON.stringify(filteredUser[0]))
      props.navigate('/dashboard')
    } else {
      notification.error('User tidak ditemukan')
    }
  }
  return { getUser }
}

export default validation
