import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeContextWrapper";
import { listColor } from "../assets/utils";
import { StyledColorProps } from "../assets/types";
import { useAppSelector } from "../../reducers/hooks";

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1720px;
  margin: 0 auto;

  li:nth-child(2) {
    animation-delay: .1s
  }

  li:nth-child(3) {
    animation-delay: .2s
  }

  li:nth-child(4) {
    animation-delay: .3s
  }

  li:nth-child(5) {
    animation-delay: .4s
  }

  li:nth-child(6) {
    animation-delay: .5s
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledElement = styled.li<StyledColorProps>`
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
  background: ${(props) => listColor(props.period)};
  position: relative;
  box-shadow: 0px 0px 2px rgb(150, 150, 150);
  opacity: 0%;
  animation: slidein .5s ease-in-out;
  animation-fill-mode: forwards;
  transition: transform 0.2s;

  .workName {
    font-size: 1.5rem;
    color: rgb(240, 240, 240);
  }

  .workComposer {
    font-size: 1.3rem;
    color: rgb(240, 240, 240);
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-5px) scale(103%);
  }

  @keyframes slidein {
    0% {
      bottom: 100px;
      opacity: 0%;
    }

    100% {
      bottom: 0px;
      opacity: 100%;
    }
  }
`;

const RandomWorks = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { recommendedWorks } = useAppSelector(
    (state) => state.recommendedWorks
  );

  const cutTitle = (title:string) => {
    if (title.length > 60) {
      return title.slice(0, 60) + ' ...'
    }
    return title
  }

  const allRandomWorks = recommendedWorks.map((obj) => (
    <StyledElement
      theme={theme}
      key={obj.id}
      period={obj.composer.epoch}
      onClick={() => navigate(`/composer/${obj.composer.id}/${obj.id}/`)}
    >
      <h2 className="workName">{cutTitle(obj.title)}</h2>
      <p className="workComposer">{obj.composer.complete_name}</p>
    </StyledElement>
  ));

  if (!recommendedWorks.length) {
    return null;
  }

  return (
    <>
      <h1>Reccomended Tracks</h1>
      <StyledList>{allRandomWorks}</StyledList>
    </>
  );
};

export default RandomWorks;
