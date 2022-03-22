import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as BackButton } from "../assets/backButton.svg";
import { useAppSelector } from "../../reducers/hooks";
import { useEffect, useState } from "react";
import { ComposerType } from "../../reducers/composersSlice";
import styled from "styled-components";
import { listColor } from '../assets/utils';

import WorkPageRecordingList from "./WorkPageRecordingList";

type StyledProps = {
  period: string
}


const StyledSticky = styled.div<StyledProps>`
  position: sticky;
  top: 0;
  background: ${props => listColor(props.period)};
  color: rgb(240, 240, 240);
  padding: 5px 5px 10px;
`

const StyledTop = styled.div`
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
    margin: 10px 0;
  }

  .composerDetails {
    display: flex;
    align-items: center;

    .portraitContainer {
      width: 40px;
      height: 40px;
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

    &:hover {
      cursor: pointer;
    }
  }
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

  if (selectedComposer && title) {
    return (
      <>
        <StyledSticky period={selectedComposer.epoch}>
          <StyledTop>
            <div className="svgContainer" onClick={() => navigate(-1)}>
              <BackButton fill='rgb(240, 240, 240)' />
            </div>
            <h2>Recordings</h2>
          </StyledTop>
          <StyledDetails>
            <h1>{title}</h1>
            <div className="composerDetails" onClick={() => navigate(`/composer/${selectedComposer.id}`)}>
              <div className="portraitContainer">
                <img src={selectedComposer.portrait} alt="" />
              </div>
              <div>
                <span className="composerName">{selectedComposer.complete_name}</span>
              </div>
            </div>
          </StyledDetails>
        </StyledSticky>
        <WorkPageRecordingList selectedComposer={selectedComposer} title={title} />
      </>
    )
  } else {
    return null
  }
}

export default WorkPage