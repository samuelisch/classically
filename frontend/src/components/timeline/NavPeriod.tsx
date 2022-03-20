import styled from 'styled-components'
import { listColor, listYears } from '../../utils'

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
    background: rgb(200, 200, 200);
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
`

const NavPeriod = ({ text }: PropTypes) => {
  return (
    <StyledContainer>
      <StyledText period={text}>{text}</StyledText>
      <StyledYears>{listYears(text)}</StyledYears>
    </StyledContainer>
  )
}

export default NavPeriod