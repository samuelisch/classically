import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { AiOutlineHome } from 'react-icons/ai'
import { GiMusicalScore, GiBackwardTime } from "react-icons/gi";
import { BiSearch } from 'react-icons/bi'
import { ThemeType } from '../assets/types';
import styled from 'styled-components'
import { useContext, useState } from 'react';
import { ThemeContext } from '../../ThemeContextWrapper';

const StyledNav = styled.nav<ThemeType>`
  flex: 1;
  max-width: 120px;
  padding: 0 10px;
  border-right: 1px solid black;
  background: ${props => props.theme.background};
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
  text-decoration: none;
  display: flex;
  justfiy-content: center;
  margin-top: 10px;
  color: ${props => props.theme.color};

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
      background: ${props => props.theme.hoverColor};
    }
  }
`

const IconContextProvider = ({className, children}:any) => <IconContext.Provider value={{className}}>{children}</IconContext.Provider>;

const StyledIconContext = styled(IconContextProvider)`
  color: ${props => props.theme.color};
  font-size: 2.3rem;
`

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true)
  const { theme, changeTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    changeTheme()
  }

  return (
    <StyledNav theme={theme}>
      <StyledIconContext className="iconProvider" theme={theme}>
        <StyledList>
          <div>
            <StyledLink to="/home" theme={theme}>
              <li>
                <AiOutlineHome />
                <span className="iconText">Home</span>
              </li>
            </StyledLink>
            <StyledLink to="/popular" theme={theme}>
              <li>
                <GiMusicalScore />
                <span className="iconText">Featured</span>
              </li>
            </StyledLink>
            <StyledLink to="/timeline" theme={theme}>
              <li>
                <GiBackwardTime />
                <span className="iconText">Timeline</span>
              </li>
            </StyledLink>
            <StyledLink to="/search" theme={theme}>
              <li>
                <BiSearch />
                <span className="iconText">Search</span>
              </li>
            </StyledLink>
          </div>
          <div className="mode">
            <button type="button" onClick={toggleTheme}>
              {darkMode 
              ?
                <span>Light Mode</span>
              :
                <span>Dark Mode</span>
              }
            </button>
          </div>
        </StyledList>
      </StyledIconContext>
    </StyledNav>
  )
}

export default Navbar