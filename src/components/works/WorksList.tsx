import { useContext, useEffect, useState } from "react";
import { useAppSelector } from "../../reducers/hooks";
import Work from "./Work";
import styled from "styled-components";
import musicCall from "../../apiCalls/musicCall";
import { ThemeContext } from "../../ThemeContextWrapper";
import { ComposerType, WorkType } from "../assets/types";

const StyledList = styled.ul`
  background: ${(props) => props.theme.background};
  transition: background 0.1s;
  border-top: 1px solid rgb(150, 150, 150);
  border-bottom: 1px solid rgb(150, 150, 150);
`;

type PropsType = {
  composerId: string;
};

const WorksList = ({ composerId }: PropsType) => {
  const { theme } = useContext(ThemeContext);
  const { composerList } = useAppSelector((state) => state.composers);
  const [composerWorks, setComposerWorks] = useState<WorkType[] | []>([]);
  const [selectedComposer, setSelectedComposer] = useState<ComposerType | null>(
    null
  );

  useEffect(() => {
    let mounted = true;
    if (composerId) {
      const selectedComposer = composerList.find(
        (composer) => composer.id === composerId
      );
      if (selectedComposer) {
        musicCall
          .getWorksFromComposerId(composerId)
          .then((response) => {
            if (mounted) {
              setSelectedComposer(selectedComposer);
              setComposerWorks(response.works);
            }
          })
          .catch((err) => {
            if (mounted) {
              console.error(err);
            }
          });
      }
    }

    return () => {
      mounted = false;
    };
  }, [composerId, composerList]);

  const listOfWorks = composerWorks.map((work: WorkType) => {
    if (selectedComposer) {
      return <Work key={work.id} work={work} composer={selectedComposer} />;
    } else {
      return null;
    }
  });

  if (!composerWorks) {
    return <h1>Loading ...</h1>;
  }

  return <StyledList theme={theme}>{listOfWorks}</StyledList>;
};

export default WorksList;
