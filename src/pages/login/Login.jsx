import { Button, Flex, Form, Input, Typography } from 'antd'
import React from 'react'
import { imagePaths } from '../../constants/imagePaths'
import {
  StyledSection,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from './StyledComponents'
const { Text, Link } = Typography
const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
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
            ]}
          >
            <Input.Password
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
