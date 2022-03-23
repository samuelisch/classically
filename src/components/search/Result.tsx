import { useNavigate } from 'react-router'
import styled from 'styled-components'

const StyledElement = styled.li`
  width: 100%;
  padding: 5px 8px;
  border-bottom: 1px solid rgb(180, 180, 180);
  transition: background .1s;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: rgb(220, 220, 220);
    cursor: pointer;
  }
`

const StyledTitle = styled.p`
  font-size: 1.3rem;
`

const StyledDescription = styled.div`
  font-size: 1.1rem;
  color: rgb(80, 80, 80);
`

type PropsType = {
  //id : string,
  composerId: string,
  genre: string,
  title: string,
  composerName: string,
}

const Result = ({ composerId, genre, title, composerName }: PropsType) => {
  const navigate = useNavigate();

  return (
    <StyledElement onClick={() => navigate(`/composer/${composerId}/${title}`)}>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>
        <span>{composerName},</span>
        &nbsp;
        <span><i>{genre}</i></span>
      </StyledDescription>
    </StyledElement>
  )
}

export default Result