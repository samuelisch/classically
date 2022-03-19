import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
  flex: 1 1 0;
  background: rgb(240, 240, 240);
  height: 100vh;
  padding: 10px;
  border-right: 1px solid black;
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    list-style: none;
    padding: 10px 0;
    border: 1px solid red;
  }
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const Navbar = () => {
  return (
    <StyledNav>
      <StyledList>
          <StyledLink to="/home">
            <li>Home</li>
          </StyledLink>
          <StyledLink to="/composers">
            <li>Composers</li>
          </StyledLink>
      </StyledList>
    </StyledNav>
  )
}

export default Navbar