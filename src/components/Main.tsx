import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '../ThemeContextWrapper'
import { ThemeType } from './assets/types'
import Navbar from './navbar/Navbar'

const StyledContainer = styled.div<ThemeType>`
  display: flex;
  background: ${props => props.theme.background}
  color: ${props => props.theme.color}
`

const StyledContent = styled.div`
  flex: 8;
  height: 100vh;
  overflow: scroll;
  background: ${props => props.theme.background}
  color: ${props => props.theme.color}
`

const Main = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <StyledContainer theme={theme}>
      <Navbar />
      <StyledContent theme={theme}>
        <Outlet />
      </StyledContent>
    </StyledContainer>
  )
}

export default Main