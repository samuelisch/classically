import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../../reducers/hooks";
import { addViewedWorks } from "../../reducers/viewedWorkSlice";
import { ThemeContext } from "../../ThemeContextWrapper";
import { ComposerType, WorkType } from "../assets/types";

const StyledElement = styled.li`
  background: ${(props) => props.theme.listBackground};
  transition: background: .1s;

  &:hover {
    background: ${(props) => props.theme.listHoverColor};
    cursor: pointer;
  }
`;

const StyledContainer = styled.div`
  padding: 5px 0;
  margin: 0 5px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.color};
`;

const StyledTitle = styled.h4`
  font-size: 1.3rem;
`;

const StyledGenre = styled.span`
  font-size: 1.1rem;
`;

type PropsType = {
  work: WorkType;
  composer: ComposerType;
};

const Work = ({ work, composer }: PropsType) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const workClickHandler = () => {
    dispatch(addViewedWorks({ workComposer: composer, viewedWork: work }));
    navigate(`${work.id}`);
  };

  return (
    <StyledElement onClick={workClickHandler} theme={theme}>
      <StyledContainer theme={theme}>
        <StyledTitle>{work.title}</StyledTitle>
        <StyledGenre>{work.genre}</StyledGenre>
      </StyledContainer>
    </StyledElement>
  );
};

export default Work;
