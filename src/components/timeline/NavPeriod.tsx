import styled from "styled-components";
import { listColor, listYears } from "../assets/utils";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContextWrapper";
import { StyledColorProps } from "../assets/types";

const StyledContainer = styled.div`
  margin: 8px;
  white-space: nowrap;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

type PropTypes = {
  text: string;
};

const StyledText = styled.div<StyledColorProps>`
  background: ${(props) => listColor(props.period)};
  padding: 5px 8px;
  border-radius: 5px;
  color: rgb(240, 240, 240);
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const StyledYears = styled.div`
  font-size: 1.1rem;
  color: ${(props) => props.theme.color};
`;

const NavPeriod = ({ text }: PropTypes) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledContainer>
      <HashLink smooth to={`#${text}`}>
        <StyledText theme={theme} period={text}>
          {text}
        </StyledText>
        <StyledYears theme={theme}>{listYears(text)}</StyledYears>
      </HashLink>
    </StyledContainer>
  );
};

export default NavPeriod;
