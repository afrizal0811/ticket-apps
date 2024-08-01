import { Input } from 'antd'
import React from 'react'
const AntdInputPassword = (props) => {
  const { className, name, onChange, placeholder, prefix, type, value } = props
  return (
    <Input.Password
      className={className}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      prefix={prefix}
      type={type}
      value={value}
    />
  )
}

export default AntdInputPassword
