import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
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
  box-shadow: 0px 0px 2px rgb(150, 150, 150);
  background: ${(props) => props.theme.listBackground};
  transition: transform 0.2s;

  .workName {
    font-size: 1.5rem;
  }

  .workComposer {
    font-size: 1.3rem;
  }

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.listHoverColor};
    transform: translateY(-5px) scale(103%);
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
      <p className="workComposer">{obj.workComposer.complete_name}</p>
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
