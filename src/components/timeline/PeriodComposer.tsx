import styled from "styled-components";
import { showYear } from "../assets/utils";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContextWrapper";
import { useAppDispatch } from "../../reducers/hooks";
import { addViewedComposers } from "../../reducers/viewedComposersSlice";
import { ComposerType } from "../assets/types";

const StyledLi = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 5px 20px 5px 10px;
  flex: 1;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: background: .2s;

  &:first-of-type {
    border-top-left-radius: 10px;
  }

  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom: none;
  }

  &:hover {
    background: ${(props) => props.theme.hoverColor};
    cursor: pointer;
  }
`;

const StyledDetails = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImageContainer = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledDates = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
`;

type PropsType = {
  composer: ComposerType;
};

const Composer = ({ composer }: PropsType) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addViewedComposers(composer));
    navigate(`/composer/${composer.id}`);
  };

  return (
    <StyledLi onClick={handleClick} theme={theme}>
      <StyledDetails>
        <StyledImageContainer>
          <img src={composer.portrait} alt="" />
        </StyledImageContainer>
        <span>{composer.name}</span>
      </StyledDetails>
      <StyledDates>
        <i>b: {showYear(composer.birth)}</i>
      </StyledDates>
    </StyledLi>
  );
};

export default Composer;
