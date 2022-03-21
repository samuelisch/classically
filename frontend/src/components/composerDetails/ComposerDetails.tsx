import styled from "styled-components";
import { ComposerType } from "../../reducers/composersSlice";
import { showYear } from "../assets/utils";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  border-radius: 5px;

  .portraitContainer {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .dates {
    margin-top: 10px;
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
  const { birth, death, portrait, epoch } = composer;

  return (
    <StyledContainer>
        <div className="portraitContainer">
          <img src={portrait} alt="" />
        </div>
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