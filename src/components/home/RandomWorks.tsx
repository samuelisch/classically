import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../ThemeContextWrapper";
import { listColor } from "../assets/utils";
import { RandomWorkType } from "./Home";

type StyledProps = {
  period: string
}

const StyledContainer = styled.div`
  margin: 50px 0;
`

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

const StyledElement = styled.li<StyledProps>`
  flex: 1;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 250px;
  max-width: 500px;
  height: 70px;
  background: ${props => listColor(props.period)};

  .workName {
    font-size: 1.5rem;
    color: rgb(240, 240, 240);
  }

  .workGenre {
    font-size: 1.3rem;
    color: rgb(240, 240, 240);
  }

  &:hover {
    cursor: pointer;
    opacity: 95%;
  }
`

type PropsType = {
  randomWorks: RandomWorkType[]
}

const RandomWorks = ({ randomWorks }: PropsType) => {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate();

  const allRandomWorks = randomWorks.map(obj => (
    <StyledElement theme={theme} key={obj.id} period={obj.composer.epoch} onClick={() => navigate(`/composer/${obj.composer.id}/${obj.id}/`)}>
      <h2 className="workName">{obj.title}</h2>
      <p className="workGenre">{obj.genre}</p>
    </StyledElement>
  ))

  if (!randomWorks.length) {
    return null;
  }

  return (
    <StyledContainer>
      <h1>Reccomended Tracks</h1>
      <StyledList>
        {allRandomWorks}
      </StyledList>
    </StyledContainer>
  )
}

export default RandomWorks