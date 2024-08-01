import { Input } from 'antd'
import React from 'react'
const AntdInput = (props) => {
  const { className, name, onChange, placeholder, prefix, type, value } = props
  return (
    <Input
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

export default AntdInput
