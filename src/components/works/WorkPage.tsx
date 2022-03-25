import styled from "styled-components";
import musicCall from "../../apiCalls/musicCall";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as BackButton } from "../assets/backButton.svg";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { useEffect, useState } from "react";
import { listColor } from "../assets/utils";
import { ComposerType, StyledColorProps, WorkType } from "../assets/types";
import { addViewedWorks } from "../../reducers/viewedWorkSlice";

import WorkPageRecordingList from "./WorkPageRecordingList";

const StyledSticky = styled.div<StyledColorProps>`
  position: sticky;
  top: 0;
  background: ${(props) => listColor(props.period)};
  transition: background 0.1s;
  color: rgb(240, 240, 240);
  padding: 5px 5px 10px;
`;

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
`;

const defaultComposer = {
  id: "",
  birth: "",
  death: "",
  name: "",
  complete_name: "",
  epoch: "",
  portrait: "",
};

const WorkPage = () => {
  const { composerId, workId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [selectedComposer, setSelectedComposer] =
    useState<ComposerType>(defaultComposer);
  const [work, setWork] = useState<WorkType | null>(null);
  const { composerList } = useAppSelector((state) => state.composers);

  useEffect(() => {
    if (selectedComposer && work) {
      dispatch(
        addViewedWorks({ workComposer: selectedComposer, viewedWork: work })
      );
    }
  }, [selectedComposer, work, dispatch]);

  useEffect(() => {
    if (composerId) {
      const selected = composerList.find(
        (composer) => composer.id === composerId
      );
      if (selected) {
        setSelectedComposer(selected);
      }
    }
  }, [composerId, composerList]);

  useEffect(() => {
    let mounted = true;
    if (workId) {
      musicCall
        .getWorkDetail(workId)
        .then((response) => {
          if (mounted) {
            setWork(response.work);
          }
        })
        .catch((err) => {
          if (mounted) {
            console.error(err);
          }
        });

      return () => {
        mounted = false;
      };
    }
  }, [workId]);

  const composerNameClick = () => {
    navigate(`/composer/${selectedComposer.id}`);
  };

  if (selectedComposer && work) {
    return (
      <>
        <StyledSticky period={selectedComposer.epoch}>
          <StyledTop>
            <div className="svgContainer" onClick={() => navigate(-1)}>
              <BackButton fill="rgb(240, 240, 240)" />
            </div>
            <h2>Recordings</h2>
          </StyledTop>
          <StyledDetails>
            <h1>{work.title}</h1>
            <div className="composerDetails" onClick={composerNameClick}>
              <div className="portraitContainer">
                <img src={selectedComposer.portrait} alt="" />
              </div>
              <div>
                <span className="composerName">
                  {selectedComposer.complete_name}
                </span>
              </div>
            </div>
          </StyledDetails>
        </StyledSticky>
        <WorkPageRecordingList
          selectedComposer={selectedComposer}
          work={work}
        />
      </>
    );
  } else {
    return null;
  }
};

export default WorkPage;
