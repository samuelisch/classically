import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { mode } from '../assets/utils'
import { WorkType } from './WorkPage'

const StyledElement = styled.li`
  background: ${mode.background};
  transition: background: .1s;

  &:hover {
    background: rgb(60, 60, 60);
    cursor: pointer;
  }
`

const StyledContainer = styled.div`
  padding: 5px 0;
  margin: 0 5px;
  border-bottom: 1px solid rgb(180, 180, 180);
`

const StyledTitle = styled.h4`
  font-size: 1.3rem;
`

const StyledGenre = styled.span`
  font-size: 1.1rem;
`

type PropsType = {
  work: WorkType
}

const Work = ({ work }: PropsType) => {
  const navigate = useNavigate();

  return (
    <StyledElement onClick={() => navigate(`${work.id}`)}>
      <StyledContainer>
        <StyledTitle>{work.title}</StyledTitle>
        <StyledGenre>{work.genre}</StyledGenre>
      </StyledContainer>
    </StyledElement>
  )
}

export default Work