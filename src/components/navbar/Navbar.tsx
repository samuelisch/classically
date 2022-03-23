import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
  background: rgb(240, 240, 240);
  padding: 10px;
  border-right: 1px solid black;
`

const StyledList = styled.ul`
  position: sticky;
  top: 10px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    list-style: none;
    padding: 10px 0;
    border: 1px solid red;
  }

  .mode {
    margin-bottom: 20px;
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
        <div>
          <StyledLink to="/home">
            <li>Home</li>
          </StyledLink>
          <StyledLink to="/popular">
            <li>Featured</li>
          </StyledLink>
          <StyledLink to="/timeline">
            <li>Timeline</li>
          </StyledLink>
          <StyledLink to="/search">
            <li>Search</li>
          </StyledLink>
        </div>
        <div className="mode">
          <button type="button">Mode</button>
        </div>
      </StyledList>
    </StyledNav>
  )
}

export default Navbar