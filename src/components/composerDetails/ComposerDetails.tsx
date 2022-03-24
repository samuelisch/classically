import styled from "styled-components";
import { ComposerType, StyledColorProps } from "../assets/types";
import { showYear } from "../assets/utils";
import { listColor } from '../assets/utils';


const StyledContainer = styled.div<StyledColorProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  background: ${props => listColor(props.period)};
  color: rgb(240, 240, 240);

  .dates {
    font-size: 1.5rem;
  }

  .period {
    font-size: 1.7rem;
  }
`

type PropsType = {
  composer: ComposerType
}

const ComposerDetails = ({ composer }: PropsType) => {
  const { birth, death, epoch } = composer;

  return (
    <StyledContainer period={epoch}>
        <div className="dates">
          <span>{showYear(birth)} - {death ? showYear(death) : ""}</span>
        </div>
        <div className="period">
          <span>{epoch} Composer</span>
        </div>
      </StyledContainer>
  )
}

export default ComposerDetails