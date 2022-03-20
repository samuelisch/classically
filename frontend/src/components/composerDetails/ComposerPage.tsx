import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ComposerType } from "../../reducers/composersSlice";
import { ComposerWorkType } from "../../reducers/dumpSlice";
import { useAppSelector } from "../../reducers/hooks";
import {ReactComponent as BackButton} from '../assets/backButton.svg'
import ComposerDetails from "./ComposerDetails";

const StyledContainer = styled.div`
  position: relative;
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
`

const ComposerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { composerList } = useAppSelector((state) => state.composers);
  const { dumpList } = useAppSelector((state) => state.dump);
  const [displayComposer, setDisplayComposer] = useState<ComposerType | any>(null);
  const [composerWorks, setComposerWorks] = useState<ComposerWorkType[] | any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (displayComposer && composerWorks) {
      setLoaded(true)
    } else {
      setLoaded(false)
    }
  }, [displayComposer, composerWorks])

  useEffect(() => {
    const selectedComposer = composerList.find(composer => composer.id === id);
    if (selectedComposer) {
      setDisplayComposer(selectedComposer)
    }
  }, [composerList, id])

  useEffect(() => {
    if (displayComposer) {
      const selectedComposer = dumpList.find(composer => composer.complete_name === displayComposer.complete_name)
      if (selectedComposer) {
        setComposerWorks(selectedComposer.works)
      }
    }
  }, [displayComposer, dumpList])

  if (!loaded) {
    return (
      <h1>Loading ...</h1>
    )
  }

  return (
    <StyledContainer>
      <StyledTop>
        <div className="svgContainer" onClick={() => navigate(-1)}>
          <BackButton />
        </div>
        <h2>{displayComposer?.complete_name}</h2>
      </StyledTop>
      <ComposerDetails composer={displayComposer} />
    </StyledContainer>
  )
}

export default ComposerPage