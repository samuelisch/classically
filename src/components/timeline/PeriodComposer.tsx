import { ComposerType } from '../../reducers/composersSlice';
import styled from 'styled-components';
import { mode, showYear } from '../assets/utils';
import { useNavigate } from 'react-router-dom';

const StyledLi = styled.li`
  border-bottom: 1px solid rgb(150, 150, 150);
  padding: 5px 20px 5px 10px;
  flex: 1;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${mode.background};
  transition: background: .2s;

  &:first-of-type {
    border-top-left-radius: 10px;
  }

  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom: none;
  }

  &:hover {
    background: rgb(60, 60, 60);
    cursor: pointer;
  }
`

const StyledDetails = styled.div`
  display: flex;
  align-items: center;
`

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
`

const StyledDates = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
`

const Composer = ({ id, birth, name, portrait }:ComposerType) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/composer/${id}`)
  }

  return (
    <StyledLi onClick={handleClick}>
      <StyledDetails>
        <StyledImageContainer>
          <img src={portrait} alt="" />
        </StyledImageContainer>
        <span>
          {name}
        </span>
      </StyledDetails>
      <StyledDates>
        <i>b: {showYear(birth)}</i>
      </StyledDates>
    </StyledLi>
  )
}

export default Composer