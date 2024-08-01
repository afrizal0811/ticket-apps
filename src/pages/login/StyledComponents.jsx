import { Flex, Typography } from 'antd'
import styled from 'styled-components'
const { Text, Title } = Typography

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100dvw;
`

export const StyledWrapper = styled(Flex)`
  height: auto;
  width: auto;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 40px;
  box-shadow: 11px 11px 13px rgba(0, 0, 0, 0.1),
    100px 100px 100px rgba(0, 0, 0, 0.07);
`
export const StyledText = styled(Text)`
  font-size: 14px;
  margin-bottom: 20px;
`
export const StyledTitle = styled(Title)`
  font-weight: 700 !important;
  margin: 10px 0 !important;
`
