import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledElement = styled.li`
  background: rgb(220, 220, 220);
  transition: background: .1s;

  &:hover {
    background: rgb(200, 200, 200);
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

export type WorkType = {
  id: string
  genre: string,
  title: string,
  subtitle: string
}

const Work = ({ id, genre, title }: WorkType) => {
  const navigate = useNavigate();

  return (
    <StyledElement onClick={() => navigate(`${id}`)}>
      <StyledContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledGenre>{genre}</StyledGenre>
      </StyledContainer>
    </StyledElement>
  )
}

export default Work