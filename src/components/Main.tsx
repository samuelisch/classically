import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './navbar/Navbar'

const StyledContainer = styled.div`
  display: flex;
`

const StyledContent = styled.div`
  flex: 1;
  min-height: 100vh;
  overflow-x: hidden;
`

const Main = () => {

  return (
    <StyledContainer>
      <Navbar />
      <StyledContent>
        <Outlet />
      </StyledContent>
    </StyledContainer>
  )
}

export default Main