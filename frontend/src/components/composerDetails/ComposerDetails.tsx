import styled from "styled-components";
import { ComposerType } from "../../reducers/composersSlice";
import { showYear } from "../assets/utils";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  border-radius: 5px;

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
    <StyledContainer>
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