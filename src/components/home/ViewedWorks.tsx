import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../reducers/hooks";
import { ThemeContext } from "../../ThemeContextWrapper";

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1720px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledElement = styled.li`
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
  background: ${(props) => props.theme.listBackground};

  .workName {
    font-size: 1.5rem;
  }

  .workGenre {
    font-size: 1.3rem;
  }

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.listHoverColor};
  }
`;

const ViewedWorks = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const viewedWorks = useAppSelector((state) => state.viewedWorks);

  const allViewedWorks = viewedWorks.map((obj) => (
    <StyledElement
      theme={theme}
      key={obj.viewedWork.id}
      onClick={() =>
        navigate(`/composer/${obj.workComposer.id}/${obj.viewedWork.id}/`)
      }
    >
      <h2 className="workName">{obj.viewedWork.title}</h2>
      <p className="workGenre">{obj.viewedWork.genre}</p>
    </StyledElement>
  ));

  if (!viewedWorks.length) {
    return null;
  }

  return (
    <>
      <h1>Works Viewed</h1>
      <StyledList>{allViewedWorks}</StyledList>
    </>
  );
};

export default ViewedWorks;
