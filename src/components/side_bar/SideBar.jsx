import { Layout, Menu, theme } from 'antd'
import React from 'react'
import { sideBarItems } from '../../constants/items'
const { Header, Content, Sider } = Layout

const SideBar = (props) => {
  const { content } = props
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
      >
        <div>COBAA</div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={sideBarItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          AUS
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {content}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
export default SideBar
