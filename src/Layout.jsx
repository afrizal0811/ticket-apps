import { default as AntdLayout } from 'antd/lib/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './components/side_bar/SideBar'
const Layout = (props) => {
  const AntdContent = AntdLayout.Content

  return (
    <AntdLayout>
      <SideBar {...props}>
        <AntdContent>
          <Outlet />
        </AntdContent>
      </SideBar>
    </AntdLayout>
  )
}

export default Layout
