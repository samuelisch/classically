import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as BackButton } from "../assets/backButton.svg";
import { useAppSelector } from "../../reducers/hooks";
import { useEffect, useState } from "react";
import { ComposerType } from "../../reducers/composersSlice";
import styled from "styled-components";
import { listColor } from '../assets/utils';

import WorkPageRecordingList from "./WorkPageRecordingList";
import musicCall from "../../apiCalls/musicCall";

type StyledProps = {
  period: string
}

export type WorkType = {
  id: string
  genre: string,
  title: string,
  searchterms: string[]
}

const StyledSticky = styled.div<StyledProps>`
  position: sticky;
  top: 0;
  background: ${props => listColor(props.period)};
  transition: background .1s;
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
  const { composerId, workId } = useParams();
  const navigate = useNavigate();
  const [selectedComposer, setSelectedComposer] = useState<ComposerType>(defaultComposer)
  const [work, setWork] = useState<WorkType | null>(null)
  const { composerList } = useAppSelector((state) => state.composers);

  useEffect(() => {
    if (composerId) {
      const selected = composerList.find(composer => composer.id === composerId)
      if (selected) {
        setSelectedComposer(selected)
      }
    }
  }, [composerId, composerList])

  useEffect (() => {
    let mounted = true;
    if (workId) {
      musicCall
        .getWorkDetail(workId)
        .then(response => {
          if (mounted) {
            setWork(response.work)
          }
        })
        .catch(err => {
          if (mounted) {
            console.error(err)
          }
        })

      return () => {
        mounted = false;
      }
    }
  }, [workId])

  if (selectedComposer && work) {
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
            <h1>{work.title}</h1>
            <div className="composerDetails" onClick={() => navigate(`/classically/composer/${selectedComposer.id}`)}>
              <div className="portraitContainer">
                <img src={selectedComposer.portrait} alt="" />
              </div>
              <div>
                <span className="composerName">{selectedComposer.complete_name}</span>
              </div>
            </div>
          </StyledDetails>
        </StyledSticky>
        <WorkPageRecordingList selectedComposer={selectedComposer} work={work} />
      </>
    )
  } else {
    return null
  }
}

export default WorkPage