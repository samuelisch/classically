import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
  background: rgb(240, 240, 240);
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
          <StyledLink to="/timeline">
            <li>Timeline</li>
          </StyledLink>
      </StyledList>
    </StyledNav>
  )
}

export default Navbar