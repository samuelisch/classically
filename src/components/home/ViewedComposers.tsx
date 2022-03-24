import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../reducers/hooks";
import { ThemeContext } from "../../ThemeContextWrapper";

const StyledContainer = styled.div`
  margin: 50px 0;
`

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

const StyledElement = styled.li`
  margin: 25px 30px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 220px;
  background: ${props => props.theme.listBackground};

  .imgContainer {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .composerName {
    font-size: 1.6rem;
    text-align: center;
    margin-top: 30px;
  }

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.listHoverColor};
  }
`

const ViewedComposers = () => {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate();
  const viewedComposers = useAppSelector(state => state.viewedComposers);

  const allViewedComposers = viewedComposers.map(composer => (
    <StyledElement theme={theme} key={composer.id} onClick={() => navigate(`/composer/${composer.id}`)}>
      <div className="imgContainer">
        <img src={composer.portrait} alt={composer.name} />
      </div>
      <h2 className="composerName">{composer.complete_name}</h2>
    </StyledElement>
  ))

  if (!viewedComposers.length) {
    return null;
  }

  return (
    <StyledContainer>
      <h1>Composers Viewed</h1>
      <StyledList>
        {allViewedComposers}
      </StyledList>
    </StyledContainer>
  )
}

export default ViewedComposers