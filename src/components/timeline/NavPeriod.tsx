import styled from 'styled-components'
import { listColor, listYears, mode } from '../assets/utils'
import { HashLink } from 'react-router-hash-link'

type StyledProps = {
  period: string
}

type PropTypes = {
  text: string
}

const StyledContainer = styled.div`
  margin: 8px;
  white-space: nowrap;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`

const StyledText = styled.div<StyledProps>`
  background: ${props => listColor(props.period)};
  padding: 5px 8px;
  border-radius: 5px;
  color: rgb(240, 240, 240);
  font-size: 1.2rem;
  margin-bottom: 5px;
`

const StyledYears = styled.div`
  font-size: 1.1rem;
  color: ${mode.color};
`

const NavPeriod = ({ text }: PropTypes) => {
  return (
    <StyledContainer>
      <HashLink smooth to={`#${text}`}>
        <StyledText period={text}>{text}</StyledText>
        <StyledYears>{listYears(text)}</StyledYears>
      </HashLink>
    </StyledContainer>
  )
}

export default NavPeriod