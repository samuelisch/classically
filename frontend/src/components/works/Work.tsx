import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledElement = styled.li`
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
  genre: string,
  title: string,
  subtitle: string
}

const Work = ({ genre, title }: WorkType) => {
  const navigate = useNavigate();

  return (
    <StyledElement onClick={() => navigate(`${title}`)}>
      <StyledTitle>{title}</StyledTitle>
      <StyledGenre>{genre}</StyledGenre>
    </StyledElement>
  )
}

export default Work