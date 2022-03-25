import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeContextWrapper";
import { listColor } from "../assets/utils";
import { ComposerType, StyledColorProps } from "../assets/types";

const StyledLi = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${(props) => props.theme.background};
  transition: background 0.1s;

  &:hover {
    background: ${(props) => props.theme.hoverColor};
    cursor: pointer;
  }
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: ${(props) => props.theme.color};
`;

const StyledName = styled.div`
  font-size: 1.7rem;
`;

const StyledPeriod = styled.div`
  font-size: 1.3rem;
`;

const StyledImageContainer = styled.div<StyledColorProps>`
  width: 50px;
  height: 50px;
  border: 2px solid ${(props) => listColor(props.period)};
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

type PropsType = {
  composer: ComposerType;
};

const Popular = ({ composer }: PropsType) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/composer/${composer.id}`);
  };

  return (
    <StyledLi onClick={handleClick} theme={theme}>
      <StyledImageContainer period={composer.epoch}>
        <img src={composer.portrait} alt="" />
      </StyledImageContainer>
      <StyledDetails theme={theme}>
        <StyledName>{composer.complete_name}</StyledName>
        <StyledPeriod>{composer.epoch}</StyledPeriod>
      </StyledDetails>
    </StyledLi>
  );
};

export default Popular;
