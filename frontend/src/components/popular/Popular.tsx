import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ComposerType } from "../../reducers/composersSlice";

const StyledLi = styled.li`
  border-bottom: 1px solid rgb(100, 100, 100);
  padding: 5px 10px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: rgb(240, 240, 240);
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

const StyledImageContainer = styled.div`
  width: 50px;
  margin-right: 20px;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
      <StyledImageContainer>
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