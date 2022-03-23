import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { GrHomeRounded } from 'react-icons/gr'
import { GiMusicalScore, GiBackwardTime } from "react-icons/gi";
import { BiSearch } from 'react-icons/bi'
import styled from 'styled-components'

const StyledNav = styled.nav`
  flex: 1;
  max-width: 120px;
  background: rgb(240, 240, 240);
  padding: 0 10px;
  border-right: 1px solid black;
`

const StyledList = styled.ul`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .mode {
    margin-bottom: 10px;
  }
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  justfiy-content: center;
  margin-top: 10px;

  li {
    width: 90%;
    list-style: none;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    transition: background .2s;

    span {
      font-size: 1.5rem;
      margin-left: 10px;
      display: none;

      @media (min-width: 930px) {
        display: block;
      }
    }

    &:hover {
      background: rgb(220, 220, 220);
    }
  }
`

const IconContextProvider = ({className, children}:any) => <IconContext.Provider value={{className}}>{children}</IconContext.Provider>;

const StyledIconContext = styled(IconContextProvider)`
  color: rgb(20, 20, 20);
  font-size: 2.3rem;
`

const Navbar = () => {
  return (
    <StyledNav>
      <StyledIconContext className="iconProvider">
        <StyledList>
          <div>
            <StyledLink to="/home">
              <li>
                <GrHomeRounded />
                <span className="iconText">Home</span>
              </li>
            </StyledLink>
            <StyledLink to="/popular">
              <li>
                <GiMusicalScore />
                <span className="iconText">Featured</span>
              </li>
            </StyledLink>
            <StyledLink to="/timeline">
              <li>
                <GiBackwardTime />
                <span className="iconText">Timeline</span>
              </li>
            </StyledLink>
            <StyledLink to="/search">
              <li>
                <BiSearch />
                <span className="iconText">Search</span>
              </li>
            </StyledLink>
          </div>
          <div className="mode">
            <button type="button">Mode</button>
          </div>
        </StyledList>
      </StyledIconContext>
    </StyledNav>
  )
}

export default Navbar