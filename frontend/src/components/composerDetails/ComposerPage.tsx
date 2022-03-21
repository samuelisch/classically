import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ComposerType } from "../../reducers/composersSlice";
import { useAppSelector } from "../../reducers/hooks";
import { ReactComponent as BackButton } from "../assets/backButton.svg";
import ComposerDetails from "./ComposerDetails";
import WorksList from "./WorksList";

const StyledContainer = styled.div`
  position: relative;
  padding-bottom: 10px;
`;

const StyledTop = styled.div`
  position: sticky;
  top: 0;
  background: rgb(240, 240, 240);
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
  const { id } = useParams();
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
      (composer) => composer.id === id
    );
    if (selectedComposer) {
      setDisplayComposer(selectedComposer);
    }
  }, [composerList, id]);

  if (!loaded) {
    return <h1>Loading ...</h1>;
  }

  return (
    <StyledContainer>
      <StyledTop>
        <div className="svgContainer" onClick={() => navigate(-1)}>
          <BackButton />
        </div>
        <h2>{displayComposer.complete_name}</h2>
      </StyledTop>
      <ComposerDetails composer={displayComposer} />
      <WorksList composerName={displayComposer.complete_name} />
    </StyledContainer>
  );
};

export default ComposerPage;
