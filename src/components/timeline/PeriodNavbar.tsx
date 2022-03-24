import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../ThemeContextWrapper'

import NavPeriod from './NavPeriod'

const StyledContainer = styled.div`
  position: sticky;
  top: 0;
  background: ${props => props.theme.background};
  transition: background .1s;
  z-index: 5;
`

const StyledList = styled.ul`
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`

type PropTypes = {
  periods: string[]
}

const PeriodNavbar = ({ periods }: PropTypes) => {
  const { theme } = useContext(ThemeContext)

  const elements = periods.map((period, i) => (
    <NavPeriod 
      key={i}
      text={period}
    />
  ))

  return (
    <StyledContainer theme={theme}>
      <StyledList>
        {elements}
      </StyledList>
    </StyledContainer>
  )
}

export default PeriodNavbar