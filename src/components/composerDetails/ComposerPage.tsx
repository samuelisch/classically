import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../reducers/hooks";
import { ReactComponent as BackButton } from "../assets/backButton.svg";
import styled from "styled-components";
import { listColor } from '../assets/utils';

import ComposerDetails from "./ComposerDetails";
import WorksList from "../works/WorksList";
import { ComposerType, StyledColorProps } from "../assets/types";

const StyledContainer = styled.div`
  position: relative;
`;

const StyledSticky = styled.div<StyledColorProps>`
  position: sticky;
  top: 0;
  background: ${props => listColor(props.period)};
  transition: background .1s;
  color: rgb(240, 240, 240);
  padding-bottom: 10px;

  .portraitContainer {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }
`

const StyledTop = styled.div`
  padding: 5px;
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

const defaultComposer = {
  id: "",
  birth: "",
  death: "",
  name: "",
  complete_name: "",
  epoch: "",
  portrait: ""
}

const ComposerPage = () => {
  const { composerId } = useParams();
  const navigate = useNavigate();
  const { composerList } = useAppSelector((state) => state.composers);
  const [displayComposer, setDisplayComposer] = useState<ComposerType>(defaultComposer);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (displayComposer.name.length) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [displayComposer]);

  useEffect(() => {
    const selectedComposer = composerList.find(
      (composer) => composer.id === composerId
    );
    if (selectedComposer) {
      setDisplayComposer(selectedComposer);
    }
  }, [composerList, composerId]);

  if (!loaded) {
    return <h1>Loading ...</h1>;
  }

  return (
    <StyledContainer>
      <StyledSticky period={displayComposer.epoch}>
        <StyledTop>
          <div className="svgContainer" onClick={() => navigate(-1)}>
            <BackButton fill="rgb(240, 240, 240)" />
          </div>
          <h2>{displayComposer.complete_name}</h2>
        </StyledTop>
        <div className="portraitContainer">
          <img src={displayComposer.portrait} alt="" />
        </div>
      </StyledSticky>
      <ComposerDetails composer={displayComposer} />
      <WorksList composerId={displayComposer.id} />
    </StyledContainer>
  );
};

export default ComposerPage;
