import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ComposerType } from "../../reducers/composersSlice";
import { ThemeContext } from "../../ThemeContextWrapper";
import { listColor } from "../assets/utils";

type StyledProps = {
  period: string
}

const StyledLi = styled.li`
  border-bottom: 1px solid ${props => props.theme.borderColor};
  padding: 10px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${props => props.theme.background};
  transition: background .1s;

  &:hover {
    background: ${props => props.theme.hoverColor};
    cursor: pointer;
  }
`

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: ${props => props.theme.color};
`

const StyledName = styled.div`
  font-size: 1.7rem;
`

const StyledPeriod = styled.div`
  font-size: 1.3rem;
`

const StyledImageContainer = styled.div<StyledProps>`
  width: 50px;
  height: 50px;
  border: 2px solid ${props => listColor(props.period)};
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`

const Popular = ({ id, complete_name, epoch, portrait }: ComposerType) => {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate();

  const handleClick = () => {
    // const selected = dumpList.find(composer => composer.complete_name === completeName)
    // if (selected) {
    //   console.log(selected.works)
    // }
    navigate(`/classically/composer/${id}`)
  }

  return (
    <StyledLi onClick={handleClick} theme={theme}>
      <StyledImageContainer period={epoch}>
        <img src={portrait} alt="" />
      </StyledImageContainer>
      <StyledDetails theme={theme}>
        <StyledName>{complete_name}</StyledName>
        <StyledPeriod>{epoch}</StyledPeriod>
    </StyledDetails>
    </StyledLi>
  )
}

export default Popular