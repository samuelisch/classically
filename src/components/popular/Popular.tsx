import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ComposerType } from "../../reducers/composersSlice";
import { listColor, mode } from "../assets/utils";

type StyledProps = {
  period: string
}

const StyledLi = styled.li`
  border-bottom: 1px solid rgb(100, 100, 100);
  padding: 5px 10px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${mode.background};
  transition: background .1s;

  &:hover {
    background: rgb(60, 60, 60);
    cursor: pointer;
  }
`

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
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
  const navigate = useNavigate();

  const handleClick = () => {
    // const selected = dumpList.find(composer => composer.complete_name === completeName)
    // if (selected) {
    //   console.log(selected.works)
    // }
    navigate(`/composer/${id}`)
  }

  return (
    <StyledLi onClick={handleClick}>
      <StyledImageContainer period={epoch}>
        <img src={portrait} alt="" />
      </StyledImageContainer>
      <StyledDetails>
      <StyledName>{complete_name}</StyledName>
      <StyledPeriod>{epoch}</StyledPeriod>
    </StyledDetails>
    </StyledLi>
  )
}

export default Popular