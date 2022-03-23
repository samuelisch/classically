import styled from 'styled-components'
import { mode } from '../assets/utils'

import NavPeriod from './NavPeriod'

const StyledContainer = styled.div`
  position: sticky;
  top: 0;
  background: ${mode.background};
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
  const elements = periods.map((period, i) => (
    <NavPeriod 
      key={i}
      text={period}
    />
  ))

  return (
    <StyledContainer>
      <StyledList>
        {elements}
      </StyledList>
    </StyledContainer>
  )
}

export default PeriodNavbar