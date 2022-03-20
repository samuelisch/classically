import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './navbar/Navbar'

const StyledContainer = styled.div`
  display: flex;
`

const StyledContent = styled.div`
  flex: 1;
  height: 100vh;
  overflow: scroll;
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