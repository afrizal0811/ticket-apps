import { Button } from 'antd'
import React from 'react'

const AntdButton = (props) => {
  const {
    block,
    children,
    className,
    danger,
    htmlType,
    icon,
    loading,
    onClick,
    type,
  } = props
  return (
    <Button
      block={block}
      className={className}
      danger={danger}
      htmlType={htmlType}
      icon={icon}
      loading={loading}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  )
}

export default AntdButton
