import { Flex, Form, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Button, Input, InputPassword } from '../../components/antd_components'
import { imagePaths } from '../../constants/imagePaths'
import { getApi } from '../../utilities/handleApi'
import validation from '../../validation/validation'
import {
  StyledSection,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from './StyledComponents'
const { Text, Link } = Typography

const Login = (props) => {
  const { navigate } = props
  const { getUser, isLogin, isAdmin } = validation(props)
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isLogin()) {
      if (isAdmin()) navigate('/admin')
      else navigate('/guest')
    }
  }, [isLogin, isAdmin, navigate])

  useEffect(() => {
    const fetch = async () => {
      setUsers(await getApi(process.env.REACT_APP_BASE_URL))
    }
    fetch()
  }, [])

  const onFinish = (values) => {
    setIsLoading(true)
    getUser(users, values)
    setIsLoading(false)
  }

  return (
    <StyledSection>
      <StyledWrapper
        vertical
        align='center'
        justify='center'
      >
        <Flex
          vertical
          align='center'
          justify='center'
          gap={10}
        >
          <img
            src={imagePaths.logo}
            alt='logo'
            width={50}
            height={50}
          />
          <StyledTitle
            type='secondary'
            level={4}
          >
            Dashboard Kit
          </StyledTitle>
          <StyledTitle level={3}>Log In to Dashboard Kit</StyledTitle>
          <StyledText type='secondary'>
            Enter your email and password below
          </StyledText>
        </Flex>
        <Form
          name='login'
          onFinish={onFinish}
          layout='vertical'
          requiredMark='optional'
          style={{ width: '100%' }}
        >
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input placeholder='Input Email' />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
              { min: 8, message: 'Password must be minimum 8 characters.' },
            ]}
          >
            <InputPassword
              type='password'
              placeholder='Input Password'
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: '0px' }}>
            <Flex
              vertical
              align='center'
              justify='center'
              gap={10}
            >
              <Button
                block='true'
                type='primary'
                htmlType='submit'
                loading={isLoading}
              >
                Log in
              </Button>
              <div>
                <Text>Don't have an account?</Text> <Link href=''>Sign up</Link>
              </div>
            </Flex>
          </Form.Item>
        </Form>
      </StyledWrapper>
    </StyledSection>
  )
}

export default Login
