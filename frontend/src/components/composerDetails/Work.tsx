import styled from 'styled-components'

const StyledElement = styled.li`

`

export type WorkType = {
  genre: string,
  title: string,
  subtitle: string
}

const Work = ({ genre, title, subtitle }: WorkType) => {
  return (
    <StyledElement>
      <h4>{title}</h4>
      <span>{genre}</span>
    </StyledElement>
  )
}

export default Work