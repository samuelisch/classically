import { useContext } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { ThemeContext } from '../../ThemeContextWrapper'

const StyledElement = styled.li`
  width: 100%;
  padding: 5px 8px;
  border-bottom: 1px solid rgb(180, 180, 180);
  transition: background .1s;
  background: ${props => props.theme.background};
  transition: background .1s;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: ${props => props.theme.hoverColor};
    cursor: pointer;
  }
`

const StyledTitle = styled.p`
  font-size: 1.3rem;
  color: ${props => props.theme.color}
`

const StyledDescription = styled.div`
  font-size: 1.1rem;
  color: ${props => props.theme.color};
`

type PropsType = {
  //id : string,
  composerId: string,
  genre: string,
  titleId: string,
  title: string,
  composerName: string,
}

const Result = ({ composerId, genre, titleId, title, composerName }: PropsType) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <StyledElement onClick={() => navigate(`/classically/composer/${composerId}/${titleId}`)} theme={theme}>
      <StyledTitle theme={theme}>{title}</StyledTitle>
      <StyledDescription theme={theme}>
        <span>{composerName},</span>
        &nbsp;
        <span><i>{genre}</i></span>
      </StyledDescription>
    </StyledElement>
  )
}

export default Result