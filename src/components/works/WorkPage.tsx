import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as BackButton } from "../assets/backButton.svg";
import styled from "styled-components";
import { useAppSelector } from "../../reducers/hooks";
import { useEffect, useState } from "react";
import { ComposerType } from "../../reducers/composersSlice";

const StyledContainer = styled.div`

`

const StyledSticky = styled.div`
  position: sticky;
  top: 0;
  background: rgb(240, 240, 240);
  padding: 5px 5px 10px;
`

const StyledTop = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  .svgContainer {
    width: 30px;
    margin-right: 10px;

    &:hover {
      cursor: pointer;
    }
  }

  h2 {
    font-size: 2rem;
  }
`;

const StyledDetails = styled.div`
  h1 {
    font-size: 1.7rem;
  }

  .composerDetails {
    display: flex;
    align-items: center;

    .portraitContainer {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
  
      img {
        width: 100%;
        height: 100%;
      }
    }

    .composerName {
      font-size: 1.5rem;
    }
  }
`

const StyledRecordings = styled.div`
  background: rgb(220, 220, 220);
  border-top: 1px solid rgb(150, 150, 150);
  border-bottom: 1px solid rgb(150, 150, 150);
`

const defaultComposer = {
  id: "",
  birth: "",
  death: "",
  name: "",
  complete_name: "",
  epoch: "",
  portrait: ""
}

const WorkPage = () => {
  const { id, title } = useParams();
  const navigate = useNavigate();
  const [selectedComposer, setSelectedComposer] = useState<ComposerType>(defaultComposer)
  const { composerList } = useAppSelector((state) => state.composers);

  useEffect(() => {
    if (id) {
      const selected = composerList.find(composer => composer.id === id)
      if (selected) {
        setSelectedComposer(selected)
      }
    }
  }, [id, composerList])

  return (
    <StyledContainer>
      <StyledSticky>
        <StyledTop>
          <div className="svgContainer" onClick={() => navigate(-1)}>
            <BackButton />
          </div>
          <h2>Recordings</h2>
        </StyledTop>
        <StyledDetails>
          <h1>{title}</h1>
          <div className="composerDetails">
            <div className="portraitContainer">
              <img src={selectedComposer.portrait} alt="" />
            </div>
            <div>
              <span className="composerName">{selectedComposer.complete_name}</span>
            </div>
          </div>
        </StyledDetails>
      </StyledSticky>
      <StyledRecordings>
        Hello
      </StyledRecordings>
    </StyledContainer>
  )
}

export default WorkPage